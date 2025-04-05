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
    "3LYRawwxjkeD5nzY1sc6eswQbAk1ro7zW94rL6pUHMXHHDbAxZcbi6Y9zvEUwjzoCv6MQyb6xoAhY55DcZjQSizL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5RfT8skDmrihJQaHUf5qzRzPstpZFVcn7edGNVS44cmU1SEA7shjpFQvUik3cre5RBvSny2qzqymj1Fm13rKWsgJ",
  "key1": "4r8y766qMNpJvd5cyiegDWcFkwLFuzERBmKWj6ohT7TwMfCmTA9qyFaHgHJJWwBvcxFgNmYPLuSY2TvsbbpV1Mem",
  "key2": "4vaJZuDeXKdhGVvvEwJwoFgH1EqWH4TTNYxhGU1muwg3WReBUgEZGfaVG2aYc2FuPFxev9ybL4NhthvS5QMCnaSd",
  "key3": "43epWEDeWbchmw4kdZyvYxLfoJYhZygxVNQDy8n8CJwC7ZxPLJyF3YEwSXupCtghqqMTUVwtSaenrxqzkTFU13Rp",
  "key4": "4VZotKoupmjks7iMhbMitYw3PuGLeSM5jDNoKoEXy72bJ7bzdtNngqkregzuEYuUdpFF7BFdbrUtbX1qUt5RhcL8",
  "key5": "5kudJyEkP5EBk7RRAXR7CroRMcnCv3qxhtWu7tC6jhSVqKGYg9LwX1nqeS6wPbuC3Hw4vGCxyBbbsPMM7L6QAHx1",
  "key6": "3HbhukUfM3waRjVp29aB1Mf8kvCRhnKKm5DFmgd6nJ1cnLCfz1GHgUVdz2bPCDqRYKkU5RRczEpJGr72neLFPQXB",
  "key7": "5eFDg2Cu7WeUrAPxeh5rG1pXigzojoWrpQXvrzGMwpuEFPG8qMvpgVHgySzvxZz2gGbt6d4H6orqRykz9vxsvykh",
  "key8": "3gywPvbjhjtdPjbTLfhfc49Fj6AuofbTdZv2rCLdeRh33g8q4ckBi7UMxb9nFLtzmdTVJmbeW4J1ZpfmAApUnrGP",
  "key9": "2LNW3vK3XaXnLbPDS2RLaQU1sSqKrfpZQYvdRC6qiXpbkraQw22v2i4xz25ctJMAoASbyojZDkZYz72JizsD42ST",
  "key10": "638voGyBMjvJqNGgpJZ5QCfp9C5TMpYJUEqB6cLdC2bsnkcMTw6NjGCQ72oF4S2u7agRiJgdyYpNotvhtrfKqxGS",
  "key11": "yaRs1rDCq9UHkg4QpfHbiAwo8aabXoLtK2ExKxXdqviAjyVhDibodccW9YS91VuafVUWpP4kNrBb4DFdas8BPA2",
  "key12": "2sjUBMaRR9UggYf1gvcDrsLzDL1a3wgt2L1FweWp8kNcag8g3WxWEEmy1KHxBbcp7j56wVZgragRX78zvsdL5pz8",
  "key13": "2kVSmAQH2rYSSEKqG23qisshX99x9aXWLv8DnZ1NpY8HBWkpjY2wPWgARCgWwopjnidF5iWK9JE1EEjYn67eBbSK",
  "key14": "56f5AiaLs1eruzPYf9jtYPXVcDd4xokZQWPCQsyp26M6zewCXjwnwns8NeNow8cnS3EBUSSabxYgPidLTxXpzspg",
  "key15": "56ajQ6y8WD4oAC6SxYByVA8LLPAsXLUMeRFdoXiqt48uvncXd9UkyNgk5cpTd8oGWbyh9qLM47paVaFT8Ze7AiDP",
  "key16": "4vYsgXBCAcZWST4iHPv4raioQDeZ8SoZFtZhE5VyDTSFPWLfUbv9jSjVf8SpaxVZYuY3FRvSBtLbiZ2jhLWeF8Wt",
  "key17": "51UaAUJRAEkzcjbqhJMNkWkx6A2LCfxHWAv1azJt674wT3zvf3stnrMxmwWZsziXPgzf6uQ1q5gDzxkDQhooYs5L",
  "key18": "38fLiHut9NRba8ByurWw8krff4zoqQyr5thLvxvv9Ly6XFfe68fZkZmUEm1PzfYPcR3atpN52UtxfyWWyasXEDSw",
  "key19": "3gihSRmrbFjBMXEvriRG9ypgbMAd39VhAcap2QDRhSyNDeHeGYP36FUm8cFK7hFpGxuFKR1z8cRumBXUF6NWVxnW",
  "key20": "5MeA7g71p7VCswvcctEvd5pxzBj9faHL9krFkQF4NTNBnzcyfPJaehikC2WfreNm8SDKTKMgqicd2VLkr44kStod",
  "key21": "4JGTV6iPvyo9zRQQN243GXXF9WryK96UVrp1Fy8pBkKXq5aWhowv2X9gXH1whj3VtgSUS4fxhmp8AQ4Rhe9H5URo",
  "key22": "4errVovX22y7JpcYuAr3ZHPSWjpv78Ap1YFaDkConPRxJ2z2cj2dk5cFYrXcYZ6raFuoyyyorJyshgC6WqqponFX",
  "key23": "4QKCCmYJ4FVPqJZSXrELzhwxtpYgAnsQbTX9rSf2TvQQrZZ7MMeWaozszo6BufLc5Xur9AG5kgxNoiHeuFC7KZ5P",
  "key24": "27Gi74S9YNwcc6ukUGT4zmyfFHSJwpZcScBi3SvrqMc9a2ybQT4dGWqxtgigm3uPebKz4h5HyK4mu9faV1Z7shhw",
  "key25": "55rHgAr6LABzTBwmzyLqWTENEGUz7iRQERJ4eyohcekvWnFuDb4muLvVispKFVMuibA2YBBPBXckGcbTLkYErVsy"
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
