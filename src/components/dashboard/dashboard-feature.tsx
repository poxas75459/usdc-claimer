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
    "2QeTSszsxvYfLNCgB5DFM471P8fwUUfnob6qUXzcoy9zWdUKUQfaL48CRsmXNzCagYDLRmRdEFRNW8aBaM9AXv43"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hgCt4rGD1bZfztMUECryswKV6xfzsnqfVLLQD6VDJLQ6MrhdjzrWFggQ4k4YecFmFurRuuBn825JiWwadG79tNa",
  "key1": "4YikkHnyjppgLPjD9LsdMJcH5RcN5rR1M2n5CTTrQ42bYNvV1iMLS815ruvsVZA8wwp1hKsZgRJG9jg5esN1aj2G",
  "key2": "3VhPA2SF1iWjoP4Q1LA83nL5EVJttoJKRHQZdx6kNXZKG6rf3gJUnGoRut2GwVhkgzGkeiLruDMLb6MhNWegRnfC",
  "key3": "3h6bUxZ2ZEuoJDBbwbNkzRwarUoiE3hpncT97suXtJKPZNxnSa9pzadBm6KRDDJCC33hhCec5n8qALSUP7tVo731",
  "key4": "67BtKM2u1A8eDJ9FASLyKbFv4uQbCdV9gnwokPNvg3XLpyCgHtudb6msvqgNeR4CpiWbpQNSAMUqF869Vipx9ypx",
  "key5": "s54MuESonM6MBfK9ZJZztBvZ5QyCSSfuGrfA1deGHBstdEwMcwX9iF925vMCx8KjQ1Tr9YPX7K8ejiXrZCNbiFu",
  "key6": "5PpASfTn7qMfoajsZqod4eEmmzx6exnjfcqnBLkGmj8THoCYwZu3LxcHWBZapgvS4Ruwi6JPNq6KJfGdTVeNEQkC",
  "key7": "3UM5wyBzfEsGdRSudwtqXkTQpekVbFsuCPRCVE3MwxWxeCTBLcLoo9bvu9FjxEHZZ94Jrr9oBRNJyytPhanmU2VG",
  "key8": "5PvfvrTqBuaLnsZa1AVByQfNx9js8UsnM32q8SAFeBXwajFemgsSrXuwWBWkwMbxYGEA3PZZoaoeFMdNC1wNv7BR",
  "key9": "4WqPkxpqZRenSkv3vVqa11L9AiAcdFgjVBXjcHKWuDhVh3zJ5n2HYceDa5i4hqLdXxEY54bKA6HeAiFVEbdkDxDF",
  "key10": "27QuorCocvA8icb6o9Nu5SUjk2LVBqLkB2M1Ncwy6uq3BETQn1H1SG5Rftst8hPZiSwS93h9j4xtieLZg6pZMN5G",
  "key11": "4GyumFrWK84zeFBtJnsGoqRxiVHb4wmerPp4zuLD8KrU1Wk4df13Pg3Qo18ZLBkFkmSv8QHTSbdrb7KZFfSU5PbF",
  "key12": "4eLJBwPL5VBmMb9ihiJ5ksaRWgBCknUkMZjYgcMFCcoDo3zG6MsbSXYUEj9jZ7UkGYp1tJ3TMGCzQfw6HrbFUTCi",
  "key13": "2BghBALuHf7FRsk6XdjQoKm1GCKZFj2ZjV8t1G3cGURvYyAujYmYNz2RZyD1UrPJnUKpeAM1fxm731JGZyLrxBL2",
  "key14": "5qxXKN5Eo2TGi4u35mh157SnKCv5zdDYdjM4XV3YHyYRANotavn4CHX2bovPFZVBUmEUjSkkmvCBwEXALiiGD2Mx",
  "key15": "3Z1GBtUBgCgAi1fJVi2t71vFyAbdy6E38QvNuDucRK91TVQC7R27H2bqnDgYxkVMmfMJ749DpkAMNoeWw1qLug16",
  "key16": "55qDrj5U24i5hJF3tFzmnpNk2P9EWvrHMw7ac1kB9KNNtqgJYPSMtttsp8WntyQXu861e8rXF2obCpSdTsZBonBM",
  "key17": "431o7ZsUso9yaqvRmyGZDjax8HJMHGG8PFrLGGFtpjJjKAWarXUm3Z97Cb5WU6jDvwFAF7TxSNk7uCrGtEhjc4Lk",
  "key18": "4PeMMBeMk5BKYWS6gQ6RSVAcTKX9bpq1wzkEUNJcahzX14zd4wVc2N5NJQeWJK2jyzqNe66cXXRxzFy1m5xgsw4r",
  "key19": "3dyN1A9DtZgXAgtEZsumWhrqMQvuCAuNc226qcMPrb4MGxQQttFAGVmtAmMXjVXwyE7pifRPwiNLj52tkDC75mkS",
  "key20": "5Qf26ZPP3R9cUdmPD8QVYAdvPrgXdbBmjZm1DbhCLvg3JuXC1VKPWXzrYHNaip6K3t1fMk8xstCvCkDmR1dDeXrJ",
  "key21": "3eooY1uWVKTpksPzaFWqnzzg1iiwro4gkz2duM53aCG4VryiPkvrGEXYwMFZiskDF6uxymD4ARysHxmtjs9jorhy",
  "key22": "2g2geXjyAhXzhXPoYuAJicKPCGPUoDFXNERRoqZ76pGerfnu7BPYDH6gXdCiQ6RdPMxr9qufYgzEX8HJsGWLyVo",
  "key23": "4i3KSi3ob5kERwSAbTM2pdhdGkfHHcLYB5c5dUAr5WMbyheQ13DWF1nMcf1jfVVHYsB9iyqDz1GMC7p4yG6LgUF1",
  "key24": "3515ZAZNZTS3e4kvGirbZ1ieSkbXPDySD4FdQSDeuVCudo1KfHrTE4MZ6CCLsgR3v4YaZrzBUsP4DiDMq4v1LhyN",
  "key25": "43YE9F4a7ARgA7Wm5i6cDrgSgbnGijw5hGKyPP7J85JQJGcVo3bQmVXXkoJaPYSV9aKjC5fTEVPWRSttwz7UKW7f",
  "key26": "2MUnihdpsCSTqerDqFyBxYC1crbdu74FMCtXq6VoXjntmTW57cksj7i4bD2m6D66UfWZFDowMsoycDWAZVbLtAnx"
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
