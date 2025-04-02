/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2z53DHzH4ySn9zXbgVD3NtttwrcukttYHnsnZC8GxNe3wrTXKbmCwji9Q9c7qVsJjzqh1A1ekhXv5twu98SH21Lo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6Bo14sQNRNZUVPR3zjvgmfHVWaTXNV15gdvuM1zynX7EHKe5KVXwJiZLDyfSy7sHLBd9QaMiimzeT8iPu4Zunmt",
  "key1": "2pESsVb1R97aGcRDSSj1RdCMj5z5WcC7UNok7EY4VWxURkmYbhfZHAXBgqKXLehQ6Pivcr4Yehgb3SJejBAY6RDe",
  "key2": "GoxCPFmew95AY3fsMW8cm47JWSF89PFT2pdupwHKVgckCLXsyYNGQPgbHPDJeYNm4s25z8uTy2RreVLYUR1jFyF",
  "key3": "375BijFZFQU5F7jXmdb1nikRH3wzyNFAuNPo7Xy7KgWRZWrDJbtZX5met2eDQavcrhpT2o6o1FvXRPz82RiJzwCq",
  "key4": "2HZ2c6aKZhmTQZyTXHAVoWwShrhsnrkRET9DEgMmxiD8J3mMu9xMKnCo6uANQdRtxHtH9m96cer5xzboX3U3Hyed",
  "key5": "2L2VspjShDWkDDc1y7sVQ6ckVAf36upu9MxaoZzX2cuLux3feuQj9iSjXYyi1RZjmbZ2Cx1uuR7QXiyZvyjq3fDT",
  "key6": "g6mDYDaE5f38bh4v2Fyxt4GnsUxbMbv5tDvwmHCnEWZYoc6XwGWNfY94vYToUpQqAJYwiovPfEzutheMPc9QCpj",
  "key7": "2EJVoyf2LVS34eh3o6SiTAjG7QxtYtf3e2kFr3g9RhWMJpAmY879NpMfxtiEb55UmLXUGd3NCyvLbvGB8PftRL9m",
  "key8": "24HaENDVcFoHJ5SWhXNv3nNFrDc8mMHwTvUevGPUFL8ZMvarKZhjobJzu4Qr6Z4UjsVBDAfnPWP2puFDmcHTbU1Z",
  "key9": "4efMUVjnsiJM8iMEo7oCc6CtMVnaqnq8W8n1C3LSeWNEHjCcMMEZs4ZSTgtrQiVkGRk9Zpq92LecaS8TBdLJSSgA",
  "key10": "gTQxD8MipzLafy3XoUkCPpzZhVzyr6r6WHDrjcFdZxenmdykqyi8DJScyro6zKGYSsPdgfgKUQ7NXrqp1nPzThJ",
  "key11": "3FgKGTyGaxMkeq1dMkYGxseMo5bibu5r5TenzqyJ6pptBRmz2iJjnfR2Fm4Qwp9wyyzX6oUeQB3RvR712seZqDjF",
  "key12": "MZDiEmuiFMeEvazNzqYF2q8hNj6BQkdFXvbBGcF6w9eNSQdyeXiMbw4pa2ThgxLZvNndPavSHfwFZiJsCUqauj9",
  "key13": "6jfh3PmHHuJSuJSXWgGuQN2VSAzgbz5bjuMcg2vSYp5owgj7LVcXSDQa1HKNzKSU5GUrKDpsaXR4adTjAjz9tfT",
  "key14": "4S2zgmzg5MPfr6Wcog5tr9uBSCmqpPvw6DPrKwHp6DsUc61MKbjUB7bkKyqSE59TJafg1mgZzMqTx5FYNu6C93Qc",
  "key15": "5awjFtruLBm7GS484XPMmjsRvcQhzR5pX3L8Fq3FdC5dY5jjgrEpzb3rahhk8XCA73rMNVe2wm9ruHzacE1wYAoJ",
  "key16": "3dx39vawbGDYrgsusepQWWwvnj93dk13xbEkTLHEVM2iPR5sz2y4d7qspqNPMpXfSTgPhgaYLjj8jmoVMzwAHtbM",
  "key17": "5MWJ4oTWxsTiAdUmxFUvpfxzQn5SfvBERVYsQv1nT6u6QUMZ2nP1oeFeSYJBiLbjWEzo1HidtGtpnxWLDdYsTU36",
  "key18": "2bqp3aM1EZr7Zkbd166dgdTMhSJdnGt8JjETuch98BZaRmtwUKL4HaLnUjp77tQaMLSdRXdBah7igU2QHLu4eK97",
  "key19": "38ioZBQ1LGFhpL4VdraUuFSax7pFWMiQkYSo8Tsovk2wu2YzBQZPTVypkyrgLpyFJhePjrv6KVrZyzH8FwP5TLgm",
  "key20": "b6f5UBqFAgc2JUQp99t8pYqrByvhkCcYeWpagYa78HUXCRgfQfP3KzKhvA38FyyxWo8CL3dAC2KV769NLbhWW1q",
  "key21": "3mCvivW7A9wqKtfa2D9tiGNyqS4NJSq1otT1GLcpDv1RyuhbyV5GWin94RrUTGXG8SovStPhXGEHYzH1QjNWBrfy",
  "key22": "4emHEin2o9jyfRhx9ESuR5eAfpDzJRFGBvdziYXCjXgTZEp4q36pkM5Ndi3AA7gw4D2fHGPYSQJJqeGT8M7iU7aj",
  "key23": "5qrBR7dUwCDoYrVDo8MDruZNeaaMJhpm73S9UpsazKLPrwyVRmPtzLyGLtzcs3LNYpKCTQbXDLRfEhfBYPcK8DDr",
  "key24": "2vEc8K9q1KwzSmp9jLVEyX5kgUWcNc4eth5YtaWfWeRBoi5WpZRpsNhzSEe18yQ4geUUa4gvPZKUA9SdxSwDeq2q",
  "key25": "3HckzzsmMUHeSC5py2unyBwem95h9FXVEbdXxdkAB2tdkNSzHkNHPzX8meq9BuZsWMp2D8tBDqXTNHpDbtoo1RuP",
  "key26": "5BW632Vqw3gYR7SunNMXhP3vmPvWsjAkeVEPHL7rzUyZyhxGYbdF7a4AfMxHp2Fbj6g213r3vhJRMaao6Yc3EUtg"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
