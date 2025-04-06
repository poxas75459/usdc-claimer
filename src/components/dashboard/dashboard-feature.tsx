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
    "2W8CC3qzadFx6QuN7s6f4CvGipgt9HKKawpj3oTRF9nmuBzxrSepHvjxmJhh6KKLAoAVTTnmxe7eSXUe99um3kjQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FT8c8VBHWCtdy5y2GAa2FhdMGKZh6kR2beW2mdmQMfdcxFPCPb48KHSv1vGhjLU9xos8v8YFHyZ5ZSunsE7az2M",
  "key1": "5gURksocB3xz7oTiu1Dv98SGx9fphApYh3VWb3hoUmA6j6NVSTLXbnBYi5HUyRaLEMQZh59871VY386HihxscNTL",
  "key2": "4LmyzA9jcJuQkFZc4HCxcD5wefPBpGLuorCqq1iaFADfNLmEUekqj8g73Mt9Ry7YJUeQ9Y6FK6YKVxHREmWiuV85",
  "key3": "e6rLkjiLgdrbF9q5LEyWGMmTN9dkqvYpV9kLKfiNvW8nkW6EcyTU4B6uSweRRKTG7Eh47QsSeTzcXTWXMTPzPgg",
  "key4": "5bnNF8iHr4u8UK5RxtaTfKbU7n6rrg7NxeFwmFi5MhydvrM2GcMLdEU5toRkVSRAV4k6gVRvrBi3dHyPEqnb8n8c",
  "key5": "5dro8SWBvkaxP5kdpeYrzBxb7YZiV5k69DNzAeFJkR2hAyJd3fpEXgiccV2E93QCgkJDdEqEeKjdF8DtZqR9Gk5S",
  "key6": "4JMagm8EtURBefQyXjzyczDT2fABJyMvVnBvZsMiQv222mifJLjXY1umNqkuHxNVTbvkJ3GxWm1Ap7kUWD53mcbU",
  "key7": "4ypXgkyq9UhHyw2eD13y2M6snossmjqYopA5grCFis8CMGK9c8WN5N5EZHeqCEEgM75xWGc4UR4seYmceTjSnJok",
  "key8": "3kVxFULc8oMfpAVLj9Nk1DgQ9g7UeiF2ErhP8fgu122NkXRSmCpkW1KBfTbrrGtifoNMiXevsYvkQc3ffLDjUimu",
  "key9": "vQpNfNy4rMBiTVvVpLpyfPmJPi3BNnhsPYSRotbEDMPXaQuX1s9tKiY3WGCFiziVoDMDKFUBdooNbpqnp2YA2DU",
  "key10": "eCjX8tATU5G9oM8ByYTakLhxJV97PwF2QRgCFNvh81Ghhhd7N9mwqfCucNmgATnGygQmrMp81wguUC1ubx3gB95",
  "key11": "4ZcC8THdRQs2enP6YDQgnzbsZoU2LZNRBNJ4Wds9Xsyy2wqd4CwoNvELoX79Gq9uEZBhXJuavw7fLQv4NpbH2DSz",
  "key12": "5hTFS2qCJyLgkgoYo683DRGEvDaCfCdgL3DTgMCaKVf3vfBTe14pG7vw3wUsawHqTgWAkgRHPvWAC7HKArn4yM5Z",
  "key13": "8a4e6S5j9nhjroXVCBLFhKCKfdSscjFGt3qyHFoAoX2DqEeBbnwGtVALwHL25CbwdX8m3hsQ8tzoSQfRa6EspYF",
  "key14": "2CA85wiyFbinsuqwMbqGMiGiE6ieGF1M8BFETCfnefGSKzSqjzXTAFiJxMYb21iGduzYNTYuFUnos3sNqjTBFxhn",
  "key15": "2GMEsePxjzF8bx1tCFe5MSyMmidh9SDQLB5d6ZygSJ9qWaJcQfK2wecFKRJ5MrTa3uwYZ2a1KAZi4yHdVr9jKu98",
  "key16": "47REnuewjm9pnZhoSGFHG4X216bqGMjibzns9j4V4bAz7uATKnuvixo4y6fruniLErHMDfpmH7yXn5fgJoPbS1pe",
  "key17": "2yEAyK313D2RnxkW1uYHrFBedw6a1B9pUTrriz7VLj6Z5RobweZNGHXreetkFzUEkLpjNcjn4Js48sxdsgmCv5WA",
  "key18": "VAkGE7j4YySsHY2HvWZ3WCK1hxF8QB77WjhQGFWu3teET2U1NuKGAPFqawUnyPd6Lh57GxBiZ8QpH6oBK3bBvy3",
  "key19": "6q83ZjYRXBwA1jj7nS1N6zNFim7yHSsxhezGsfRH1vZdom77b4Kt2Uz7GN8ScSGbeR4bnR5s9YWVcF9Y3oXCTW1",
  "key20": "5EufPrqssETZqfxVbb9Jun7RVAn3RkAuJT1bCS2dirsp9jdoKnMdo2ybrCjNQe3yMjgTs9YbikiG1a94PprDVC3H",
  "key21": "3WwbpJC5t5LBnHS3i6X1js4X4MqVmRGuqpQJvq5fXRpAJHfTzZ6zwypQNVikPanBsYG7pYi2rWjyJsiDhUUrYbL1",
  "key22": "5pNQeHQpWhDs5CSZSCiXQuikSPccGVbFR5bgEHB28pcRJUW9gZUwANsaEhNbdx7irzJWRhhFScnL5dMQ2xbwoNDQ",
  "key23": "4wky5XuDy5gq95uburJTjqaQbvFBi8Fqm42rsHqoMCg2x7kviqMxxzHmKiyQfke9MJYk8xUYsgx1gcLnbXyHP9Nr",
  "key24": "639tcZEuJwQD57XPXQR2jSdaodzcBsTXYPQgsPp7iH3F6SiA2bcrZG3XuKzhVgHYyLPYMUncNdhwMudfWqYfoKUJ"
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
