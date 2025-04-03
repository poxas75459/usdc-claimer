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
    "24wV9escRbSbRyZx8mKXnfgDvg4LgS3cZM2b2yC39M3LkLt251F2CBkkx3LVr8gxV2TfXX8hME78ggqak8uFXEDD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o25pmkBp9CmCTyCQGs5S7rpH97TSUHRmUHLaagXmYTQg5jjWFSSuqGwyBM5iesnSSyDXCY6VudqM1odGNtMPXpf",
  "key1": "5svWXpJGxm8fkLMAzsp3YGmQq8obT7CLUakpDMyx7izMWLztE5fH3UYbQf6c8wshog6rqmmKTZ44XYeJT6VtoWRn",
  "key2": "5BSmzmgdJTCTXDQuUpxsPidopCV2DhpyF3YPnkMY5bbkDZaLkTyeLpLaFKSvCjD8iYk3tQstaNuVNe3hqXdPpGUo",
  "key3": "3HNaUnv8dqkF2u5XJ7Uj83o3y4kUDNDgD8JB4BeTMVkJtjArWVDHxKo9aEAgu3insFRvxEqRbjscbSXeAHo57vjx",
  "key4": "33dNmJEBHmQ81HAQttM8uDun8Gi2CypDHsMosSHvQJ7ZHxmf9tTDrM3sm8wDsSAe1dfxw739Yr4nzXHX3DgAfdWM",
  "key5": "57iKZMbQboq8atV5a6T8N6EJ6WSBD9c3SfRd4FURUbbcbTuM9ZcxfH17qKqwSYj1cxkqVm2wCGk6WTydEH8jeZMm",
  "key6": "5wBkup4GrZMJcFgvpwUxtUVfk2iosJAia1HjzQD9d5S1WymNbbrPSERokjGF4FCFDgbfjZxYqfJ26ts63idqDWVQ",
  "key7": "4187zh47Hr2f9Gv8jGi8UMqxmshNj8DgiJwemX9GgPfArVqgTSTHgSJqHEYW991bsFbvUVhcPXGTo42rG6xsqAox",
  "key8": "3WhZF2ik9jAi3JxPtBP2F1TA4bz1Zu9ixXb93PEJE9odrWHGk5MAU7T8FJXZFzxfD6GUGUH9PosF7VeXrWLnwZPY",
  "key9": "67qN5QvKAwhM6XQCDeKrM2WbfSUJugUZdHDTK1gLWGXqGKNoPMxn7FFeiyFYrwxu4q7qwGGA6m9wuKmp9BmfMMrX",
  "key10": "61rVNCKwoMemAjTUbFegEWpU8nL3w94cjhXHpJTHYTjA6XTYrJD5UvWwfFKKuea292tJNQoBruF1mPvUWuyh3S5j",
  "key11": "rWufsmSfXvp8n3FkuP5GFrwAoXHMPg6tA4ecJoumiBCPLPNFYVir2TwRKNB5xuNVovxgWsZ6upQSjfwBRoBx8nA",
  "key12": "4W59a5ALU9cM4gc1w5fqTwYg3uDRXLsg4m3KNt9XZbzseGxAmhV3YpjfPgrnq31qDRf9GybFXoovqzFoYndiTpU9",
  "key13": "4U8kRYmQucei3saRQSUM8PsVo96Xk2wwCn2A5c1hGLzQL6zBTTKz8dcmm38zaWXEzRj1381qrrdKJAcpWECioDmV",
  "key14": "5poSnvYLFvEJQQUFWjvRa3ehnb3EyToPBhsa7JtKwpuuSmzAZFkS1euNPDEjtLpydocbFxSKNVwNk9CbToML8Nr9",
  "key15": "475dHv5Le5NY6zM99W7HFuL4jApWszhCuVMMkDK9w6UgtcGDmR29QxEfcQgk2A6ydL5CDxVk47tYupnknBYVoaZX",
  "key16": "3Mmdf8wuL6JBJST6RQ2tLBNUkp6Y8AB6JysrD9D9rL66W2xgCpekkC14rD1MtTyY1FfyfoSzZsNoUZgFYmx6XUgN",
  "key17": "2tw2NGE8eu9MmqrHJ1DSvypUVE2ayPHMyQ2mhET8ZWNqkJvxhmng5rVuNHy5cNWHF7LypicJL9tK94VAjQDqHKph",
  "key18": "4yg5SnKVrtQrkKwseRtuH64wfQmHGiHpm7Bnq2PiELsoPZ22Zd49oQVCZ1BrsN6bUUm32jTjLFGyv7kTbGegU4G4",
  "key19": "66QLMf12kzJeDdVP5mAWyuS8WRkeAvFcM1LszzhpjyEyinNu3uVFiueSHBoQxSvSaJuoyePdjY4RD5R9CwX7wUHo",
  "key20": "5rrVan21gP68KDEprszPQpo3iYav8FvmkwhhcMRPvcSUqKjBpge3iHSgWPsRcU88yk6XgG6cUu5WFmFufWH8aucM",
  "key21": "32JLukGPYkZ1DXW5c7JPiRDcek8vhd3ZvRApr9hGhF7Fdot526EM5i7QhEXCXoNG1xDXUtmCnH8Snn5HqaroFbhC",
  "key22": "XbvwghsKTsSBVtP2ytndBHBeZcotFrY8jQJefqbk7PNzPYgP7GieKPsJJJXyYHrgwVL9EPk7kAhxLaxz9HtvrAj",
  "key23": "35xZmYSCE5FedR9JoVA44zcshw4X7sqrkmDZmrPCbjSDy5vpzMBVEmFVBqHY7xZsPUNRkSqevADeygoSTDMandBG",
  "key24": "34wqmE94Kjpk8sje5nqzzafcyCDY1vDdWjH6gcykDmQmm6rdf92eK39TwGrTbetirxw3kp8Lsnn3bzDiJywDNufH",
  "key25": "4VmNgxeJXjsAKwRxkRZzzzgRRyS2VfAP6jLpqRRMbVQYfJmsK8QF8dNynu7BCujgWWUPFfeCF9uRMmj4tWxvP8Cv"
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
