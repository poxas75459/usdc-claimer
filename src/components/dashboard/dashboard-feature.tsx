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
    "3HsEdZc21z6eGQt8oBErnySVBC6uzkfB2dmijmLd9365bNQ62GSMLCdCj4eEnUE5iSoa58yrEvatnVHC6mWeWCm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MDP6U5AWN6yVyZtRP6hQeS43UqmTjV4EEdCNjWPbn6NGwJU191yLyxdcAHsGsxixRfJo1E29dat1TeHiiWkPnFi",
  "key1": "h5pTstGYxwNYLxBkGQFx2P2mpLvH9BptDbgA46mRbzg6dshex21eXNf6e3WhUKkvVYzjJH525TVCA7MwcmRKSdn",
  "key2": "tSArWBbM4mgkkCNGpp7WezpmJLmoEgGQeyJvnTMaS2fYtLnkf5oUkPyyCbtyXaHCZ8jspku3HzWavToxL2hVdiB",
  "key3": "5fa3JDcY7AB7bPQ3rynRxWMBJjnQkxLPGj7hiY8WbxfBgNJnBeLqZoZbD6qA6hhmZvoAyxLz79DrMPxjpvr2esmM",
  "key4": "4afa47YWS9UVPAdmNwgzstJ5J8qUPc26z8VKB4QouCM8ZpFXKY4H31QDvCtzBpkQ8zHUf485P1uSpyBaRVU5zzsQ",
  "key5": "4eyWahHwZuZns3CFqbsqrBSqpAGpUFCendP3SkHJni7bNAcozVFuPViGgpaQQdc9xAmUkfZQfgaD8NhVXj1HYoAR",
  "key6": "5vLZqV9Kub41j874Pof8MfYz24tPHLkXjSWL8jBvxXNxSWfygogbetAAmFedH5Ei8Mwg8T9zWavsvfmK9U8NzZTS",
  "key7": "2DfXHAyLYYUtdyyr4zWihniG2zHxG8Lqj1AEwPfDchon1tGUjyxERoWSUCa47ALwtzTQXVwabgeBGWGd71SkNpzv",
  "key8": "2gbjDv2kCz5L1xAvo4jfPrw6HL9bKc3YH4T3DcsKvfZQn1BDSbA6ibrSaeLn2HYsnbTRCKQF8zzpCr1ZbXV19WiY",
  "key9": "CMaiLTpEzoWhrzzp8uyNrDWARCRvxH7coAj8yCuzVY5nYzFPic3WaJvmQQpVHwUdFpqmeXzsUNUs8WPJGsuAabm",
  "key10": "a9f1fVfgT7vLkK3jP7XURvcKwhHShsXwbAvwQ83t3JzutGD2R7dD8eukS5cei5KFfFfL83janUTKqZ1G3j2t7Hu",
  "key11": "3kCqzVVdaz7Lvmxi9GtqEGKazR8jVx5uuiUyTm1QyNPtoMqeKrLbUeycMDBoHUosq7sC3hrhGMBXBSgoY1GHwNTM",
  "key12": "5M3t1xDjcwroMk5gR1kR9ucWjqGJMubkUxjnreXDoPpQXDZYLfwqcqJbmzn4yfjGSbGwT4Abof5qN5H7nTnd5rUb",
  "key13": "3As6qba7fcVNsbQ2Yyh6fq9EUJWQpCpGShRd8mNFSkwmcRp9R3fRG3UgkA1ngPAiDrCouG4UMD6KR6BfXMz9RgAZ",
  "key14": "3wQyDBeeDsUJD7pBS6j5yU1J4UspvcTt5zpPc6ZCLys1ab3q9s5BNk4dcqXLRTNZCCD1UVPnMjCtSaTDnHiuic6Z",
  "key15": "4rmdKUNT3WdVwdRG9CcuEhACx8D7Hv1vj7s7uYiYVoxgNgSBVpYMvqfKpdArmvyL6N1rSJFdwwquvo4jvR6kbRn9",
  "key16": "MzwVsnzXejJMYrA8QyY2XNmjCf8dKYZ7unL2cf3zHzAiefp6BZczPpKfFWJBAVABMoNHgPSvrEFJmB3ApbLU1NZ",
  "key17": "3VK3VyQR8WsaNQ7RRHMxqsZWK8dj6HrAiefAmkSBBp3fsovPVPo7nUFHZcZUSqbGTWMrkd4AggAbd33tJnLVpnuY",
  "key18": "2NBAqVdjhovydyoSbp9Baa5mVuo5sEppcnqyX4HbFUqA4995QsSoLUBnNqQC19ACAgkp6iUAobkWHibkGpe25f1P",
  "key19": "4hDEJbz5HDrPsCts87f2Jnp8tfGRrrC1LSf3SKrb3JR3q9X9dK1h4voYb88tpvsN8c4iYem8Hxe8yqTzD2jM58gA",
  "key20": "64K3zmeM3ZcJci4tLaEUinrSpJXDs61hjPEBKRvF7mBNgNvhQBfq9sXPSDtNyu37Y3TJsUFmEdY3ya6iwX8fuh7V",
  "key21": "tUnovXW7PGUWuL3Tv7YHFGhVZiUG2u9kvHeMDkuubNje484FGAojXU8B4n9MJHQqfCgQGn7s1B3Wvj3Ax9WBgcs",
  "key22": "3qeNJnuSfvXqQCz52q9uU5D1N4tXk5ntTSZ9iop9fh9sUS1pKYzacCbvHRozk3sQ38xMvujnU8w4kwY4WzFG83rs",
  "key23": "EySMEVim7uYXKz7mYsAVkSzxs38LMPQFmj6RBgbnuk3j4BVbJUwUKVBGwdNmP6VdB4JnEx3WtG3eWyTBMri46fi",
  "key24": "2YQF1kYA7BrwCYSugZAjJTGYxbaerjBcVkoZtHj63zxt2N1j8vuBTZvHjxckuePytbtho8voE6dKJnao8wZ9U86K",
  "key25": "fkkhniMyJ7WbeMJbuQPSEWGYX7DFcTQdH3Dc4GovF3twkAh4Z1xpv5SWPu6mQ3rp4zCtvs3Swsq1VucmBF8Fr3D",
  "key26": "2sJSC75mrVREfKspxUuo8UC7qHsbu7NfQ355GNtPjqRNEanPL4k2gWeNDs3PBYkxNYNaZKAALasUCYuTtXj7pbWx",
  "key27": "7q7XcmRoWrGzZjWEpUPgJJRVCgVLGtH4K3yQVVW7HgFraf1MiUbbnZ4e7xdfKMCXp6qbXKQm6j6o7UMq6BveBfu",
  "key28": "3nGMZkcF47jWHv5hTyX82xQXqewanhcVrSSuk8vhPJEi9CC3RFyGW3W1Bnj3RsXSeuV8wj2r9idA4WXeSa4845Ut"
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
