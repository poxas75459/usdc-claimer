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
    "5gBv5GA7p1qvPpZjr6sF4vFxWprNWJaGRxtGoKyCdBqjehebywqEPSF8gFjvrMMZRWCEGfYyCwazNxBuajMdzqVV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N2gJswJkgo3Md6mRcFd4k3jTjVMELznyrtmnVKFKGyXR1FLNHMPsWsbudpMLWWeLJZntD3wqW22T2Y2HmYiSrUA",
  "key1": "5qP7VeGTYaYG9cmj12M4AXQ5XGD8Go3e22cn2nei5Wo81Lnr1q9TTRsumDvd5YVLRw3pMpVFT8pgAjWZktxmMMPE",
  "key2": "5ejtU3a2Tccux7V4WtGGbP8oLmeZiGif3x18aYuJZubqJze7cnxTZtkYgvQDrDjA2CT7U9s1UJEcQaZpgWjqQAyS",
  "key3": "rAKEEJjqABLxeNGaVf28tyVU7e77Pi5R5PjUspkrX7gsYyLXoQxCa3jqmzeH3mjYhRqRKHsGKxdgAt4AgotZeaY",
  "key4": "34wwW6CZUj1LRQisN36BaTGbJqtxmJmZ4QDZYs798Tcr3ZnYJipzDK4aqW3LoCh6YmUZQURbR9GFEcXa3S7zguAM",
  "key5": "Vr3RZiJiFhCWJ1ektpJBqJwCjeRpggvbqG2qb3qSEhByLEn71KRbHkFuhfK3qpmPDCXSGTiXWChK9c7fjMzeSza",
  "key6": "4aKpes8M1WGHkxWDWmP44gF9B9U9Y46ZM8GZv6QWe4oJ76N9ZXgnwks3BTXoWsgvbupYZtwbXSqcW4oXDi7xuLT8",
  "key7": "5tBo4ZGtVb3fKdARaCice2XJJhrkz7EZT4VNoyt7HG6GakUvqFijPjJfkJ71AXzPvRU79WdWcxSYXa3YEUQEE9Pf",
  "key8": "5Cmsow8Su6qyeMQx7DgpmVxog3uTAwRaEyvvfuR33JQuF4jSn1teLvpYGLQz7o1yzXQ6Xk9Qt5vszrMTg8Zapk6b",
  "key9": "4UUpnbeu9iWjaUzHMQyuUVMztfDy5DwuZEADZwsH7rRSTdsaa6BKiXPFAi3wH56AoUjYVMMRWbReU5PPBumEuxwp",
  "key10": "LNFhRWMCvC4HHaGSQziwE7QYHo4988n1bcrX6yJ1ncrQDtrwWK9emLEjnbRBe7Vdhd7uv8hRMsfJpRbPLkUwbZ3",
  "key11": "2Ce8iV2YrdLeP25KsVNuzhxiiskdTtpyPQskCfkAfALHUy4p3BFZMgPEb9Y66TDzyGojnCqRaDvd6PSueMBkPRBH",
  "key12": "4nYZcRVy2vBg2zX38Xy8redqoq5swq26BSQJNQ4vna5A5kcv31KTCLPSUVe5r6Jggpw3yUasPgUsULgxNxRWBaaF",
  "key13": "3ySF1XLD6HRj9Feyq66AiDvHf4Cw7Ukt5mApZEh2iXiUwzMNtw2eKxNKgJUw2g2Pw6XyRR5vQMkWGuJ7W6Qq1wgA",
  "key14": "2ogBRgJNTE36LEEVrEaGozNdxfucbzRw8k9fnQAFdY76znovKXhA1NzdrnRkYBP3w7kemNUiVruLNE1s7SQ7hje8",
  "key15": "57cias1HG6Dfq6bWD3ZY3NHk4vVC6XHo6VxP4B8GbLXMkfYZsCTHfMQoQLsm3SFFogJiY1uELNcfiJ8KatHV2FHQ",
  "key16": "2aArfvZLYbpxHymBE9Lm5FNgjLvgMiVWm2A4U3sPiwBJ4GZGcVw9yaDE5zqtfR98AX7DAjUTK7h5yDFLqEYhABUU",
  "key17": "kXDrrM18fpmpgzw9hw2fbdcRoiiHjt1cg3yUH44vDiNZF51cLinZWnoVCgjQzBHp7SxP1pPY2D74hMS9uRi6ek7",
  "key18": "3pwffzfUjMDnpwd15XNahsTUALvS56Cot2rcLcqwenmAFTwXKL2RX9CHz1YWHdTzgc1nHLmm2dEPw3MRYzMPwLYT",
  "key19": "4JHoQNTcsgbygXdYVz6QZX41imWK75gYhvswGd5vMBJRphp8qxCcR9Y7zEq9p8JftDZTTLb16WiPqMxk22FCgfdP",
  "key20": "4QDtUphhmdmca7Vdjx2haATwkvsdqewB83AJsVpGZP5XCteoAac3BAvvdpozgStV3yv9hZ7zDuN8XARDbrgwvdkV",
  "key21": "2AaAK3Jf3BHcLboZzM4N1CThgzHErKCGCydtbG3GJAeGiqjqbSQzPjxbWkkoRJ2rvKpkECWFNqYdYYekXRWHHSEc",
  "key22": "2FapsnzFG5Rcnmo6wAF94MW2D45anSbkMYjvE4PoiihDrytSRv28rHJmWxR5VyuthSp3tHugws6zzV8sncTkh2qK",
  "key23": "QZvkPMXmvCLnZj8iWgg5bdhk4zCyvnrgr5sYxKYUq2zssfyd6tubRCzGJXEtqiig2rsYj41CWBZpLLLdAhbava2",
  "key24": "4tB3GEuU7kbZkf9nzn15kPJMF3qdQwhMUafMjf4eCMLoVcQ5tTgGv1RitcM4GaRDMegDVngrLCCh1EyZAyLC8YXg",
  "key25": "2Chu9VnpojHhiUCmmp4svADYRodmQdDv7w8kzqpm8WJabR8rEAv5RFyGbdoYfBn5jUpk1BCMN5EjaHJuANpUW7eY"
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
