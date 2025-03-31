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
    "4vrjYQBzUYbN9Fo8CLtbg5ZFJSppNLCWwszq2AiorE5Hc3dsUo1T1xT34gDFuRFTMVaEFTLobzFBvGNvTMGWW1PU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mo5p38twua3vAxBVLKgxrPo35vTkzAyCiwdhgRtetkwdpTSTg7yhsHHJp6yfP7cwgriAhqHtKoKKYae6f1BjDJC",
  "key1": "4iB6Cktf8tHWJQucEpsfwCRuuhY1P43hhJd9pd8YB6p1CaLmxLph7KcffH18jjmvwZEEaxZCeg5f79zhb2NVVPAU",
  "key2": "5gA66y465hk4bdP4YvRv9A2AgCWFDgqwDokEZEdc7d9Pmh2zhJw1o6pQ9dhxom6gW66iYHU8mLLC1jEG2uUqtdya",
  "key3": "4cgvQnoLwn8LYL5Fj4rRyJGar6ZaR3y891hXqEp2GbNPQVJzbB3eoUaM9uiSp84rA2AoXcvWH3de84164bg9omKi",
  "key4": "4rmTUamgu7VRXnTgxDfVmVB2hEKSkSJ3NeEx1kRVdJSEc5iexadGuyJdty7AU7jf1vhybxA2VJfBJWj1ZSw3KcX9",
  "key5": "3bbaVkA7bZXJd4YyqLaEE3WpobnUVyxRbpnfuQnjRmKEJo6PFbbxKNfnscQYjDbc34EqqM3pajbgopZsYJgwLXmz",
  "key6": "634KztGPW93mBy4pqXq3FEYX5PrbyDC3s8TjKryEWfq3egYqBzrpaRTmPvpADkfdhgZsHEes9XZ2WoPNUMP4V4xy",
  "key7": "4pv1zXu4UCAphLDJLsgoAAYPb3sCtHKb7fkKp77CzndshU3UHRWQhSVZPvurxY8QxmVr5WMMsPKuo89hVBvvFHyK",
  "key8": "2krPoiToqVGUvXTBh6w4wtJHr8kHUJ3TBvNVx8G1aEw72F5J8Gkxabd8ErhWgrhtys9e5A9j5fpHSqzYES3u4Gez",
  "key9": "2XVyG4J1DXRy5xyFB5sv9RBdSHs4hyVCeu4pKwCVZpeBaqgvoqaYjoEhwk7e6Nn9iZ2YNYGXuB1p6kZJkgsTeNET",
  "key10": "AE8h9J8DPHfojdjj2BzYZtxcyzUnb5mmddGUKPTSFBi2nZWXypR2HCefbycixNm6EepMkn6PsA86exwxWfbVvcx",
  "key11": "5qDckrnbCjHxhp65erwQjpPRYwX63TnX1YAyMLaJtWnGmfengD4A5xKY6KJvSLnkPL5uxNAZ2GB8esCHjXVrDFpG",
  "key12": "4vBk8JEdULrPoxoNRBTuHS6KneY8gsixB1CMDxKroSSt6Nz2NwxYCFCYaFsG2i42UiWxEm7tH2bBjT8gDZKbRDup",
  "key13": "3GqfsJsWgrsmktRpn7yC96FLN8tVPQk9DQo73yPc6As2E2V9htiyRFPNGs6i2Gu3CFZhmZHLEKb4WidbdRDzcAfL",
  "key14": "wNj2mBoa2BZjRB1kmeWd5aDJjLUY999JFQ65vueLURnfaA6hxkzujX6wWH2pTiKoDovB1pfJTt7Lmwjw9Yvv8wb",
  "key15": "5Eh67XyxHoKyABxyQDUVQtESwqQJ6FCbRWiCDzN8FQBaivBYg6zBjsWXhQPjq9ctwP3E6r4aYDC4LqkGi6VCgiUy",
  "key16": "3zcza3NWtqbGfzbajQZx7EXAEheKLuBESifw9sx8BWqE7CizXEcZ91heoVTLHtDjcNhn6JJ67zrzGjN6wLb9zC81",
  "key17": "39cLPoPR6KF4Cdnp6eECcwdUN62wJLr399dhzsq3mJ8wdh9tWZTqU6cmabocFHKtuaDUFg1cYJA8nCmU71RRjTcf",
  "key18": "2aYoiUskBoH73HPCeh2Gyetn2b61UPnCKqqL7vF51hNZMChzndHrGeYPXPLnQfH9pR3KKShAt7KtEMLgR9qKwAaT",
  "key19": "2a3tVB5AG2B9AE2E1K4fVfpmuQCXHJry8QYDWEeNFxjmGa9PiyhvP3oF3of2ob78m667tzGuTwJAfKP8xg22xBZt",
  "key20": "6puC6ZfhLFQtDcdYQi3nEvQXZj9anZsNqBCTwPdZerRaxw1NqFbU7He5VKQmL13ptiAbsNUyruRTf23teQtDMhq",
  "key21": "hRoNjs9DgJfriuV31tc11T7zuU131qBdR3oXvsdNDu91QB7hX3EvEovMS9Fw18Liy3kZSxWDydQndFmCYdGYJ5Q",
  "key22": "2QH4cEhWXognpkkUrcGC5ZtBG9ndPzEHVKPLZFt4MQ6ShywV3zDiDZVf6XMcJBZiLxiyqqc9eMyooD5pBsgp85g6",
  "key23": "3x2mY6mp7PbXAN2yGCW58BZPsyBvNUaLuucArS2PgfCLGMkdfb386H5TNUjyKtdVuGUgBLCfa3w6AcGqjC2zSCKT",
  "key24": "2FHbaTHQFzeL8DdfBfEZQq19oEguF16PcpJJkZeBYrwWtDux5aUnLAXGDLWfS1fqkJX33F9KsmK3xZgsaKtjkvV4",
  "key25": "k3qZJ2NfKPaVREYrQwsnb9r93kHKE86dDPXdCP4D4FBpJc6C9ie5CkEhL6JwVcjhoLGANcNBAxgp8faEFgV8WAd",
  "key26": "3tpvPFPa69Xr7u2R8vHW2ZyAtoJJwbqceJNPgZ7nonWcn4pezHQGorDLWdt3XVxQpm4XX8CVMhJ9bNJevhwvHR9",
  "key27": "5s5Yd7gQ9i5AkAARyhrNh4kXWCmuNurrgCEEzuAXyimCWweA149QBDrjKPr5KAir4Sz8hdUPTVgvpBuvVcuEzrED",
  "key28": "59zVwKwuX7dy3r2iSZ6MCUYnyczXLSmNJBFhcrkaLCkjPJamKhx36TsR1WcNxJ1UuAJmKjzFBjCMgxet5kmaFwQL"
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
