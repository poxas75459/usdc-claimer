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
    "5HpYU1v5KB4tigduKB5nWZDQC5uRy7eJ8BfGj1UGEmfQBBET98xtYDuVKsGB5HoCbETxc6exoitiMM8MRPLse6WS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4caV1JrNc85u5ckPKGX8fiUBggK45uR4uYNccTCqj5wFKREekAuBtmRXf8USjSxSiqf8FCtDq1rN4qxZfMocmiac",
  "key1": "2WjU3n7w5gHHeHxqATN9Hyq6Fk9guFvZs6X1yVhQo8FzGbLmZ2ZZohCzr7HUzBCAqhJtafzDQeWKtCszyYGB38ZS",
  "key2": "49N3meNZPamLi2bcG6xGx2eNXndj1MmsxaLxLBNNKsUP62NSsLzniZMXbzgftaxvBuGES8fGEoCGQfUrF4jZrDFU",
  "key3": "5UyVGQRxgm9jtg3LvQ6FKoUWRPhAmEdhvRb2h1seHs9jXvsZshr78BmpP5RGhVvL5rv5vSrNfputVh244Tsqjq2n",
  "key4": "426vuhHFECYVDFnsaH2B62d2A9euaoGz2y9QnyABCvoeRSWeGNzjeprz9AmzrPd2Rumi8UYsGWCw7KdkMAytGMWF",
  "key5": "4c6traThQuA8hy6jf4m3N3E4qeRrxh3NeHATV6gGRdgzsAXMdcKTX8MFp25G56cEH6a5BN6uAU1BmDhJ8dNTXCak",
  "key6": "3MKUBJ87MXm7voxZiemrNvnbvAuFpF9RYDtUtMJgwFroDaCjtEz6LuiNE7TnRXg7TPa3tArvxTP7xQXYdRAPgJab",
  "key7": "5cucHtgbPkDdPq32pyEGnuvJ5fNSfTKNNbcaz3i8GByyTaQGK5AXDMJCb8M48aj2tqk28Qb666cATx3VbhB7nRyg",
  "key8": "2Xzc62Ni1ysmASLJdKhcteaLHuouu9EFWhq5vBSnUED7vqMtsyiFzVa8hm9pPS8kFCCHPoaac9QEsqtshWjbsTp6",
  "key9": "3KvKBzfs8195o1nCCqULip1x9ZhnPnXefJ2oGHThpYs4uxrZ77Ro5RE6BgTL7ixn1zV6Ry6ezbAzAJHKDhRa3HEp",
  "key10": "48rkDMvJz8sB8HZaX8p9S9mYJBbeFshrESEF6jzicvLVwyoUsEFJgxHDqyw95BkkqSdkYxRbKdUoi3zi1XaSRb3h",
  "key11": "4XYbxi45ChDnHH26oLSgJTmX7mgTLTS8gsNzo5N6nNVnLhBneh9hyxJySa1BM2btiHskVdhoAkmhuptbFVraJQph",
  "key12": "5zCsmHKN66iPNsXE77ZfMLTDHTXorWyYTzs472in3C5GEfQDMn11BCmSE8JAiXse3Zy6uKGyKqL9HpKRTFyXPoqF",
  "key13": "3Jh6fzWWWtH2viUgjZHjcK8eap7ayFXEp6vgdudmu1eLFT5SrYFWZDCHBcmSxAWvvv1WDa4zJGtLaiVg1YfVBrfC",
  "key14": "xQW7BNQCZWfJ3niJjsFX1bTX4UV9TkkzgQnF7zWcgAN3KrYU7vViyf1uip5dcE3dmXRutq81DJHdmhbwg5cc3x4",
  "key15": "219Bn9tgBaDAxmAurAz5qgQ7jnUNXJ25bmFoYugLwVbioPLA3jPxSNraG1CB3FuG1WDUoUHKpuRgcUH9rpV4KKa1",
  "key16": "3aWnrfNVd6aMMakR8zuB6YbdsergPkucnEZBZotusWcwiYaoHkbWK1XSSSKDDPTzu4kd5eUrxHb6BzvtEyQVAg1g",
  "key17": "de9eiDjh5qRvkwtp9ARH7BVYwYQ4JtE1cmsisGJJtxfF2atczSmjNKdXY7qHH7N967PXdCQBxfjP6ELP3U7fr12",
  "key18": "4SQqhACVZ4bimYjFWTCskwkAt3McTBEFvdFGHbacg62dHgmnDd9jD3zPPfg9NqdoJzSxkPKA3uVhKUiQWC3FYBUv",
  "key19": "5viurwJRbF6zfkxjTuKzFQbPyo6B84dCqwhiX7QY7GWgiyEfjomq2Tjcr5CYqYbAJsuFrEXNYQpJzGeEayXkGx29",
  "key20": "2Q45MWzF25MD51fdRMfJxEadNaHmFbg8XKbziNt4ytTYHqJ3KiQpFLxn8ehGkX2dCKJJMRtCHsCQmVnBjnXRrQVb",
  "key21": "3qXP5GXiihcAwK28WW6E9PHTMtnN7jRSp1yrWuaLdDQ2FieJYyEzH9V74pB8M93oc9g8N5EQwktb9bQBFrh8jwgR",
  "key22": "5cVPYFcGd2ryUfBiw4C1VvU3bBSruugi8aTLafBQzGBBkU7th32TfyposT7KL9KYzp2TBAw12JtLM9VEeR4iQ1WX",
  "key23": "4y9UuUvmX3XSJqc8mLL6nhn3fNRj2TjwC5haPyUyeFkLig8cvenVtopwMEMm1sJgAAPmsAvkVYeUhaLGG11NtS95",
  "key24": "5sxAYRdWV2uMeQHJXLxMJGFcNSMj9LEdU62fpkx7oAFQiBFTEBbjPpgtqbYA6k3wTjo3RjL91yLWP4mRnq841BSv",
  "key25": "2iEjwidkhrBXy78rX2ABRBCHWNJAFV6YKiEJwWsEP1xjarRh2JgDRJK5phNBhFaityWZwWj59xYzfBGBenBKZy1P",
  "key26": "2AeQuf5hwhGviKtoS3DvoDPeEWPC8y6UosyFvL3pVU2EgopXDyTXVHBZ1KPrgPcM5eoiGZMg9BZ9f5CNiKMHrEpF",
  "key27": "gsBG36exQbdXaE56TY8HQwARUwFR6Q7Hy9s6ZSqNmSVMJnLaJD459vGh3b2CgP89C8Kc2ryzhtWvGddb6CE6ako",
  "key28": "46yjcNsp8PQv9TcUqEXWsomAH9sXomfbKv1zeKuYDBQmQYFhoRnUye2HnSKWRE5rPziGpEdze6i3LtSug2dZ7Cq8",
  "key29": "aTgHTFEtStYoUeBCPR8mbBtuJ4tVYAszFbk82eKpkMGsbD1YhSM4exSyYJ2ZWQxv1BsMXYciqVsePKhny9UsXov",
  "key30": "28LFsgr5vhR3SxcZ5d5xjWAJfVPy4zTkGSYjqi87UY7Ng3bKMqMvAdP7jLhk78ngsM35fBYZy7UDvy3uc6dm5YMB",
  "key31": "4WNkhBJ2GR3THjfQGRpqnFfHdMnr7zA8JUM3R9w3B6DXYhdps36NQ6hoKvGkQK728CW4DDNZe4GoP1LAdvX3cpCq",
  "key32": "5HbLNkoSTmeCoZxrKMnsKDwBvqxbbHfp6JiEU52yP6qP6wuSXT9txhuybCugKK9S1Sb485GfdHj28L8teJ1FXgjr",
  "key33": "3jossH3DhjwcquVGZka3LtwhJnvEERHjeERNJXKJtBraQqoPeJLsN8DLNCXN8r94TCkqtMc84dTfBvTrBzJj2eZ4",
  "key34": "5FiCgMhDcZeA4gapQ71Jo6NBF6EsTXx7RkeRJWafHFVNCauiaQdpL6PYJiZYKfopVM2gEb1ZGAGmAjyBJ32hR6Cc",
  "key35": "5TCYB5NgW2J12DeohBu3BbomxyXcQuHrT7DDf5LibRXyn3CsQJPxYvQS5c3NMnp6o6exBe86LUw3fe7Gy31RsJdH",
  "key36": "2j2fDJjTZvvCYwQgGuYRKcSTscB9p62acQd2PvCiSooyNuJE5bsyQCcHwZEZTUUiZE8crVAHCQLqdGymVre1P1rA",
  "key37": "2mY3MKyCYzQHvEUtu3EMfFyabYqfHCucRx55xHiH3nPTLmcwAgqxniRMsKcMA3zGiYShxGUAS8cATsWyYG4rjTxU"
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
