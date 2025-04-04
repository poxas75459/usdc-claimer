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
    "1uH2GfFzWs3ZhMyGqYSrvxGVRSiV5UAwb8zqa7dt9GF6JhrFFkfRpDDgzzgpyg1HS6gY6AU2EyTLMCnoj3avEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bzTT3EfxYBxobq65b8eEcApnskrSqAa5sBNVVbSTm3WtjYwFiJ9ACg2zQJMctmLNwmMHkWLfqxWRo8m1PWqbNax",
  "key1": "Ro9VpMWUvSFXccyp3xzCvp8Mhct2VMjKUxB8pU1jkop9hkyc7Goy8CZX6HyyDesSyfDpgrMyCrQrBmA4SfDULCN",
  "key2": "3emjguPJcBJZjjSGpr4iY9kE64HKeb4NxUv1qhJyczeQaPyDuUzkJmP2jqVwdiiP95RV3REEhXb5pnPRkzDgDWxg",
  "key3": "5oaMsztfDpGDMUoz7MzVPde8QuVRG8Y6r2rNCHC6DTaAUxt8afAWeoyra1j978BFcmYvhvaMMTio7dVeg1RpZbuJ",
  "key4": "4mvccdcewkGVAY1CMQKWMHFuHsuHh2gXFJocFMZR64psQkmZmDcDd8TE4oPLiyYmpahEmEEQimms6REQvkCqBHE3",
  "key5": "5B5oKW3dkeDHSsxNY5FZRyaCtYDqgyPAkixRXA3kzsSsk9UasGnCoW4q3S6WMPQoR8g4H2uD4uqjH1i8sXB4pJRe",
  "key6": "5TGx5EavhQJB5GPTwq5fzgjYiw4gPHHWszXDQmASP82Tr37eWKaqGD4pSwsYpifKVPedQXSjmB1b4MaovX8p8qka",
  "key7": "51mBTBkFY8WomDsxduzPuHszd5H9phiD7EcXCZbzpm2mSNV4nhcZfcFbCLn9KVJ6Cjja6Bm2BifNLYX8bKYdRqX6",
  "key8": "3jNxfcnXoiE69itXhtszbcbtA53tHvHaLtaZiZuxim1FbscJmxXTgwvpVQusS9jX9P8yDAf7Hz2prAQ99UdEtZyB",
  "key9": "52WQnyLQEuUo7kpchARx9uuVyK11ivfNHvC1q6y7QtyBWy16tSVjgEZyXS6AvdVkuXcsFtSeftNzaRoqBMt5y7aj",
  "key10": "5tpxawiugxqXqUzH5dTNTH3k8ZL1KUoDJUSEgo2zhAhh2gREut2CpndXCWwtjXeKZEp3s4v2M7v6une133ggLFDo",
  "key11": "2baKPixhCr9D8jjFBGnUbFgU36ohHypaiEggQL4kNnsfx35tHPhMNxAS3qJkV4gmZzeDTYtNUhbAST4uT6JGRYVr",
  "key12": "451WCnzEpHk4XvJiw4ZQZyfAshNr7AJVFEqrAUpUH3p1yk51gTqx3RtenrnJR56jSmBkMM2itqor9ubhgDqpGeoB",
  "key13": "3jjr11bPwTiASy6Eagb6ENzGWZFVFgCKzKFjw9dXZpEv2TSKUBdW9P5LM2eG26UNW2SW3Vymo4SmdxdodCJN2ekT",
  "key14": "28LCY66BoKoQpnabmseev5Xat7388JwDM3zVgGoAnGhaVYBec4bkcewzWJgEi7R8WFmMgxDiyuBqN3uUbW5yEMMe",
  "key15": "4EnFcJP2hW4TNQ1q3VwRejY5f9mnxQ9BDJGR4U6FmqRTXmLbaSfKyz4WtQTGyrpVXTWUHFcrS8KRP5txBjnprWD7",
  "key16": "4san5tKDHZUhexNLx4RiJwmGf6C1Jrw1XazWP2oTmiBTpi6MUGjAHL1nBvMZw6FLWM7c8p1T6SPf52hYfUhfgV1z",
  "key17": "4khQsYWzZQe4JEBw8LqxADpUZKbzZERAijHdM9cniSDmqJD2fJEea2RME7JGEEg4stJFef6imFYSfbuNHg1Kg4Z8",
  "key18": "39ApcN9oXih5Sntk5oQB7kNHrYDHRKvbJWfs2ZshyVdmc3V2zzhJoQYnEpkgtMHCzkxA9rMXDRZgXx3xhGGebWSJ",
  "key19": "2Hz7764k7B6L83mfMicETmLRwZPcuT9cxpT73j1gxV5z2aLYxp5pptFN1cK1fZoLSMsFPLv4j7MG6nJhcGM8w5iR",
  "key20": "6MUojJFFepkjF8c1WRfoXbj8vHuCYLxkwev1BGTYahk9qX9zR3EQx1Nhqi9bPQ9G7gakZ9xqHjjS12AbuoMKUQV",
  "key21": "4cjhsqk9CMPgf5pUpxgTL5UqpbmFsUwKAthvdJUbrpiKZedsmoE28smx96erx7ssvAeFKgvbrb3ABbxaCdL8RBnx",
  "key22": "XhhcP5yuUYWFWqtQLJVABRL32VkMYb3zVv5ZKYcFQBC43mE95PgphxuNVKynAcpvzhj9b5hgxe1A59eurSr2q7p",
  "key23": "621cbvDkZPT8SuEYb4oL8Q8PF7sh4x8eYP7yR2LcRaCDxC35QcfxTRFMXH5A3x35a5pQEKkWpPDjMkMHPbCpodE4",
  "key24": "44zFyVWtYUn45G73njUtSXnnNokUkRWinBSfpnNaN6p5zd1Mirp6habPVMSJ539xzZxNtKurinNCPcTrQqNnKCfj",
  "key25": "ehiMd5gcpG23hky4HuzW7XWQAgFFL1yRCMyX2isWD6c9ntrCq9xYTLxv2ez9qRuCpnRjq4doHF4eG3fSB11WDjb",
  "key26": "4LLVGkZQSDcQzAUoy2nm6Cy9VLEEr5TSo6okrfoyHUxwYQ3rPyhyxziF87hMTrkhWjaPPXLRedojfkCshcmrW77Q"
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
