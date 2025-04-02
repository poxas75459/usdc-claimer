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
    "3GAjtNSXnS4ZVQBvYjLTqn5KhRP6JKdvt1JXu1igT7wKoiJF29Y3WmHzDtRqsMKx5bKFVQNTPzy4fcBmot4QuD3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51nZN4DuULaYTYKvdFk6D1oCj34igrpzoWFwNAKFXegRjcQubjaan5bTju5H3fLZhczzbpKNgaA4mmxmVrYUnAAT",
  "key1": "3gTc5V33UAMxd2DH7ZunHqMudb2bvTtfDLba8LmQJ9a6hQCD7nz7EnewaVczzDcYehCnCypPu5zSwCybpgfjHxU7",
  "key2": "5S1m4aCDUtqWtLQzhaZ2YeFmkQXXYAMBiUN1iSUiHsNpJZentXKLyZxtUfZBNmfAFZRCD4hAoPhF3mqGvrRN7ZSG",
  "key3": "TAYWy3kZAVqimti6LT49n725hejggFEivk79RobrwszmsvaY8efA4C31q2Ymp3mgSJTkQQwRBfhtU7hXmFZcN9A",
  "key4": "28dzJL9tk4x47f7mLoJ95DbMEs58ZFpMRFg7m2QhVj6gXNyYvygFRzvmNgoUNdhpPBfDoTeguzUH8mAAcocqhp2Q",
  "key5": "p4xejaCxnyTeipP12tzPec6SaAAWbPYonxkdkZZoimAodWokR1Cgda6WdJivGXMBHVmaPx7MidxbtXJHkxJp913",
  "key6": "61SDjhxz48pLNjoWE3GMdRVxxNUPfwvD3EgHayDXpng9JT7y5iHpFCuo6pmH5EWrikm8apazzHQx64suKQkzNUMs",
  "key7": "5LoFt9NFzyyaJFM72sLWkJU6hZWBJ53oVt5NQ56tHVoqcYSBhkBzJ2cpPpsa82h6FfcKWZw2KkHwmFVk3xtg7BDT",
  "key8": "3F33bPSPbkysBTnjq4uz8hogKSHbeacA8DbV3waKziWL2AbLY6dqC2yN9knGjYmEYjc9ZXZD83CNBVKjRc8BJkRd",
  "key9": "7pCW5XtZQNH7Sgut64XMAybcrq5rxbcUzVJYxh4FXGb8HMLfacGNFcgbLJEEiQrHRsrvaTgfyoWPuq4TeTWpdjz",
  "key10": "62iN4jmp5Jg7dshqBQPW9fb9D7Vipo5YgX6dWk6TbEfL2KNzHYvjJh33RKgFKNPtmmzWFvCJ2d43SVYof5eP8Tfu",
  "key11": "41hNzbxWxYWHsyEnkGDUvNkZWdjgaG24ngYfM2aVM2yCebBqA3G2cH2EgTy2cKp7LcpW1Q7c8WUwM99oSg21RjP5",
  "key12": "58prr7VGc6F6DvkWnGARh3wy363JwBHd3dJm5iHZx7mJpHXteE7cUt6gZxYfdWR19rt6sNj4iNbi6pjPLYNxYDfw",
  "key13": "3ztybtpZMxUSnAUxiWmkxniBgUSDqVPA6trgXxro5AvCqhD4Dqjnt5bEvECygwHyceVffuFL5HMNv9zQG349ZvyT",
  "key14": "5fhgvYtYQUWjZJzGaKRi4xrACwL553UPzUUTHLnSyNS6nik8jND4ngrbosRmbX3unibXHqbwss9pbcyJeHRsPv8B",
  "key15": "w6cCWkTx6BpXrCRbWgvxu4LJh6gYV66iCEVAZqiN71cvrieiVqPAw2fZDoau2YxbszTbgxDAZNdJKsiEbrUYejF",
  "key16": "3mbxFKvH51NAvyRzvudjyBLhPBzE1axHwRAEfPeWTed3u8wLaQx64RQq7cHXcK5LufiiGzzrZDpdprNbhZGsMdZ9",
  "key17": "3fCSGwQ8UtxNsdQ8TkhEmYMuUR9n6kVfzpX5RAvVMYnRuSXyAEa1eDRA7CrgR5KRCr4AcfYcK9UtYsXLSYciaivu",
  "key18": "CHvd8v9QAqffoKPRXxpCHQriuqmcbnrizR7iHMqzSCNBbTCmFLudk63kKD3WEEe5ApiLPWqHde3DxzktiUqADCL",
  "key19": "3nn2Mk3ZPeWBXDL1jJjp1KzN4xBqBhfWM4iDtvowAY9eyEDc3anx9zHEgmjZQNJdRQvFvj9bqSCXZbTsEtYbhYTP",
  "key20": "bxowUj9VEXhtghuVU51uzUwtjTXoAJRg7XuCawUxZP3HWjqGeGjuuGjGWMchL2YjfwiYL7Xg26k2nrP3LY2sSD1",
  "key21": "4oHtgEvRH3sv1pHnPyxzeeypKbW4hPSCZvBnMa4CLV9DTA845tanFGrMuAhejgqNjyhJRQen7RqRLmGVMwC2wfDb",
  "key22": "RFALNWXRWQuvrRVvhTKNGLQFTJAQLQQbnJ5HG8q2w6RLZTHTVy5MSe7m2E6CLdCcEScKsAnMrfmGKPhvdcKcmB7",
  "key23": "4M1BbMhanJBZhj5SnQRzhxZ6qGTVJAK4rRzHbfSvrhpnPVA2K5NsejxvkYDSkGFPYXM4ozaDeUmbHneA1H19WYwH",
  "key24": "23VauRf9Q2dDfgARCfm2XYiNxHgx9DwyQohwiL2zBaUNZ3FKFAeFCQcEuwUkCdrAqVsDY4LQZaVKzJxxhJn7XSxU",
  "key25": "NG7srtp4HQDkyE8aPTvEjYFGZzz82vVc7NV1t3nudqRTvw7NQzQ4dDZYp1dTesMjYWsaP7v36ab8n1YaRyYvniA",
  "key26": "4oyiuhxiKQaWt44ELw8qNRKDzSajh5BgW7AR6qRMr3B4wfCFGgp7sYi585mWBNfrcuxQJPm5UdrNhn9qNPVtPFeC",
  "key27": "5RGwfw6uSKhHYadsty5cF9Q4FAYB1oeTqvNbiuqDGoisroAH1ECqGcFAZqFWP8EegiYSeBYw1csFu3nynZK8X16j",
  "key28": "t5LSMCuBKochNH5wVxSa8ZgBkQTfZGcKwXFNiJijyxAt9ACwMbqDzUPUfHovZ6299J7imsAYWkUudqR8n1Eb4Dx",
  "key29": "5TwbMyoXiXAAPNpMz48bfcRA18rfp4KEvWszKm2tb4Ht2MXgHBihK5EgEptQVg7GZUTXFsieK1DefPAsFz1XAPxa",
  "key30": "38uduiHRCiG7dtgdtqbmGopc2x6d7Ki33uUU24FFHcWc8uAzLADaPUWPeU5NNs593ztvYWYvLKob2KsjPPJmnXdd",
  "key31": "nYPVs68ZcYhS2ynPunXXYoxmxXad21rYtWcWDgaMbB785E3gVAJJQyRwGAPJb1oasoqgiFMFNXbMf93vVkhmjXk",
  "key32": "42rv2zKJZXd6aNkjpaji1KQ8XUKb3ogHqj4jhELFgkVubnByWQ8s8nnixed4Uej9CVLfiWMXna1PesS8hxMzisRg",
  "key33": "2yn4U4ssZozyN4P5jtfHFK6NnowzDr4htKGmPaKtbVgfq6qQPV3RsPPmHk9SWDRrrUW6qBgdtjCfXGjt7pbWFNyq",
  "key34": "3aNY2UVuwmRY68bDpnx6rLgo1fkvJ3EARaVdQWG55AT1dzhndq7Z2hPjwRDKVoj7g9KVxkwhufnnsiFrC8zN7Y9R"
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
