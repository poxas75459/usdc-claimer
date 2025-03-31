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
    "NKPvoA2AiWqnWbJJe9SYzoU1yqoNq5Dd2Z5LYH4ZgYgfkMoaKaimBaHZ8QfXZb315y8i3XCN6RUvz2RMHjSj9YJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sv753LW1B4LqEcHwRq98WpshDeyipmrxBEwmXtsBEVRt61r8EUf7G2MsQDgDNyVNtS7JrTE4VPE8Brs1RN4fFt2",
  "key1": "LZfndBi98MaRwzkQYSbmRD65z9LKbQm4RaXh7U1huXtUVFpztt6bYHTnamYnMWSCLhwwmpjcFvZ1aXZo6wsWYLz",
  "key2": "3n3dmyesPUobmubczU89nTZsad3e15NgDrG4QcTKDBMjqbAj6AvNTt1WagubA6J1vDZssw3fnKiJsUUZ4oSByiVi",
  "key3": "2c7Egg4JgiTQep5EWdbJm9yHWZhsVGpk7MvxoBkr4aDfzZzW7RwiqpWEDgKCMCZLWznjUUbRom71copWDSCBJ6Kp",
  "key4": "4KdBReShEipEEuw49CwcpmQF1BFwRJ1dRRUDcqnPiGqEWy5kZfaPBEbKx8ALun8pnBURoggbmTff9KxjPtBk4Dys",
  "key5": "R6xanc11dpMcZFmNMxZFCz6zwCuBdSESjNpoqui6Kg7xu1xdVa5Gv7fjgTTXouyr79npgeLPd2v3NgVWGzfJ5vp",
  "key6": "28uSgsN7M7Di3pKNfsGbyDZNvHV5D9dGPvNhZ4cKoVFau8qeRTLtFMi2pmqaXzwqnZ8MGkX2kTRDGBssRwWLMZuV",
  "key7": "56D4yCzFVAcVAGWiu1J9FwpwdAmc3ScxqMYBVo7a8gcegz9GtY9hU4QhwcBQ8LNT6wvet8dbvXHAFt6tHT6K3kCi",
  "key8": "5awumKf7x9Ed1BJ431vmtMyQECp9qn4saStRxPvw24sxXEb8oQSsagGQfwmUVeRtV5frecv78FdWfDPpo23PXkdM",
  "key9": "4SkVcqipR7ujCfUNcwozoCAwzyE6SGjEz4LDxHHJkWmvzEvSdm1dgpzLHTV28RoNHcBPP23yt2rxdyf3gjkR7Nt3",
  "key10": "3Xt5jg8i2drnfQbaX5xDfPcLqz13joh66tmc8PQvL76oGwqVEs3TYe1w3xEL1d55SbFoBUbYMmSya2qA6mPHBthF",
  "key11": "63idZZZE2qBee4ZgXywRhwapoh9oWrfVGvapLyyxFoAe81cBYChqy6BuZNqPfiC8GTc7MGHjv32i8TsMQ1ZLjK8u",
  "key12": "3QmBW3thn6edXMoQjjSBWNNnE2wvNDA7ChFagEs3Vu4FXXtFH4jrSMnWVMyrUHV76JYA64Qm6J3pi11rdK414ZCk",
  "key13": "4CZUzUEV3PRU61MVNvEYpZLfhX1Z63BKec4nJuDS1MXk67E2mFdcgDKChnkGdDk8RtnRh551sEEEwF6BcsDCritB",
  "key14": "5N75sYEHqK3f5KKnh4NhLgaNmYdb2m7WQhP48JcBY3gX9Zkpb94kJF86mdJmRAcqks48KjnM1imBdwKA5PfKi1ya",
  "key15": "4baS4kcULEd7CskPF8cCLKdUoo1XUxDhQgVfaGoifk2xuJwQWWA4kvwghMFQSG8bHVsudLRdqNZbLTHEveMrDVZG",
  "key16": "5LCBwym7uyP4vtsrNj5Q43YfvWjTig23PxsSA3EvBs9QmaxrbSzLSPXqNNcRevU627FtUmyw3rcqa4a1C6SXe41p",
  "key17": "2WpU5z6PvF1VTZgUkYk9d7udEDoGGTZViUZ2SinCY4jZuNFR8VzKz3o6r2c5hgRmbcxWevSwRRygF9NWzJfFjeny",
  "key18": "5Gj9VUfwLmdYb2SDqVb4t3F1rvD6UUY2eWfqXvp2gU1CX2hcFgDLNJ49h25ogVA6ySXS9f3EomSuX4SgKaSCHj6W",
  "key19": "qTnL1vitAv3o6Nkm3haNtdzppRcUrKBJmdDMevjeFd9B8eWp8ck2e4RkHwk3ZrbzaMePX47tWjJxGWujjxk58Zk",
  "key20": "38EYVAk8TcEtqiweWysZvP6FbsqDEqYE1nkGkXwXwEoJUkdfm93uGUCto8PeDTTzBBYEjhKerGjnRwTBde1nWNnk",
  "key21": "5i2fDLshoQdqL9eNP5JNwta9es25caA7d3iJkcotY2ptDDKW4uzd6otXaa4dKEjxbQoPGrsd6tY1wTTxtX3b74mH",
  "key22": "67KcPkMJigjmVsXWqUDzzoc2CMNdAJb57uuy3B4aoD4J86S2TcNQRLovtbe1UqPgjJEiA7Jwywwf81RVm86FYanF",
  "key23": "2Ns9SdkX4Z8Qud23awTrDVy3UPpiN5rtPWynPjbMe2TuZKRRHYDKXFt9FqdWgf1LvRvxwM9yLeSEqxHHWW7zzVgV",
  "key24": "4rNUYCcBbWbqxmYSCVz7huYtTgMP7ALZgCev59PU442hFCMaGZ5rdaf1CAxSHw9LMHYVzmiPqNVLo1yYvLBsULY4",
  "key25": "3xkdAQsRasDkRuqyWJDb9Vq9SdZUCrnEyHfphzCMJhJ37wgfuxnrERvdqGa1YBbQPrxNrmBVe41acqHMXiRd2pvw",
  "key26": "3YvsN5XisynnYMfjG8Whpr59bj7eorBFBkZ7WtFZyTEFdNrc3TBnEKtBTFUkivsotw4bY1wpyVXDa1Bki8XD2d47",
  "key27": "3UgePEYEEVhZ5j3SpLrjQ2pWqF6aqnKupsGwthcq8orW9bp3BexnBn7a3XyqQoHmGD32e6jBXwDeeocPYjWoxg4c",
  "key28": "5Ut6pwfgtnswNrvXrntU1xUppd7i9YYX83NYZo1CugihBGxEKHbqctR1W8U65NtHqaiqJBNsAYWQTHpy4iSCEMT5",
  "key29": "4kKb8kXzU7nbUNGM6EFNuZewyXSCSRFdAoPkgqj6yPAeFZBST1NfBMUao2CwEqsd3y4MobBZdXQhTsfN14WWP897"
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
