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
    "2ym43goALp7MgfEPgrDH7cASnCPouF89RuMKYkuPz6CYcXFdmDUPUWmkFAwpY9Di2gVJyrfLvUpG7k3fUyyLVxnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XeXnyANHXrqK1mSGf37vykwEhdEdriwFq58UvAAGgCi1sFw3oLstvL4GkSTKyXiPdSm7JNF95QTQvVNJGNrCevf",
  "key1": "4XJVLKk2b7534AXCi5ajv8shxog6diWVvm9gs7Yv7zrLduPax9avViUA3UfZGXiF15H82CckSgpFnDPJadnsMg1r",
  "key2": "3oMD1jXqCJX8AJb89LhB7PPxJtyJJ94pDUDdAaBX1Chuk7eQH7a8LYjAy62TTvT6auDRHVueHcVWyvCCbxNMSHfA",
  "key3": "3MKPRsJc4s4ThUxKkfCvbHeTBgBteVGjHrjhW7HyhrjtRfaV7MnJwJZvSvytBUqhPuE3z6z8GNBo3fvcEF4ej2pJ",
  "key4": "2SHdrXHGLVu5obe29mV96i9f9nTxYTHwB4V9xxEHPfAtUxHYcHBSfRqy6pzYpq285KWRmqb7Sr8pGD3x4fffE2Rz",
  "key5": "2RSLvEPKqhH5RDr6VwZydJwvK8HyH3tYJcUZgssWygbUvL77H39E397qJazJoQRpiJtDTt21DfGR6z748Rsmzsg6",
  "key6": "33MU492wYakKeE4JYnRaicG5TqqxNyG7kmEf9AV1fUAgpWz5snwCeAUQgzuJ1XtvCsGgLg6gF87Bjd3KyuBsFmKH",
  "key7": "3564S6rS33e4wkXnvmYYirhr2tbUUas4AF6rnYp7RoL2EQo1LHDaA7pT2WE8SbEZHhJBf4Y6Zk3xScqmGW1waZj1",
  "key8": "3XnXTEb9sT7v4BofQHWVGoWjE2HekJtvxUwSeSmAegXZUPX59SKUBRBVXKxNnDc7C5aWBVxeSJCfczXMUsd1R6AC",
  "key9": "3GaaAYCW59j61XmrzEzUnVKnX61emhknjuLdRX6QWdCkkHDUBV31fmqwRzJ3i9eKkTwPpriwBgvuUR6Zkz7HqTk",
  "key10": "4LQntAffDBrGoygkAGKKF9sAy6BVcgEhY275ERGGDp2GxJq8szVstJiUBySCukq9WfVBL5FoGimG7jAUjvJTmRAb",
  "key11": "5raTgKpnWFBoE8mNYZ7ezoR6eCV4MLEDC8Ce5judp5sWmcswZxgyFYx5CZQe9vhJCyPFotRDMe4kVqr8LU4n8S4h",
  "key12": "48DmVn9hJdwKxiEB65hTpwVNf7tRuTewnCpNamt1qQ6Wc8SHcfL8SMmCQdVXqumYeSmzTZHAJ55gZLBdy3oaX9Zf",
  "key13": "3zZ8NYMTLaq7CGSzw3T2sgWmPD7D28vsXMYmS5TgE1aZ1P2mmJsZRhBjaCiNh8pDyb45EhuiHEsS342q4yGgvZpJ",
  "key14": "4ajMrPakQZPbJxjjeYYwmbhhkaxhaahKtKA6vcGL8cGNEn41XfY3XbLTT9RqaSR4oEn6VpcKSZiQBgAcK2LJHTrg",
  "key15": "5hPzBiot9MFnwLcNnA8bwSDPRkz2JEvbBrRvBtDVDexZMZFVdGNQeEsyGzLyFMAwnezDtxrxzztf6Dhorgjx5B8D",
  "key16": "4nbjiS2rH4JKoqozBwAVdqMFkWiqwW5NMjmR3HqWshhCCUcko63dQpgWs7yLzCE3idSmuWcbkHcQEc6qUL5thDVc",
  "key17": "3tqEUGpSZLoSPea85P7e9TNmSsxDTZRZxuhR8SXuTVY6GGVSYNriFQiD5LFS62JhbTvqZi2hH3pTr7vDXvjyr81E",
  "key18": "5KbR33RSE9iR1UweZVvrD9ZyEzUSyyjE7TQQpXyDGS4YjahL8kXTDEFXsxrL3bPYdrTHosFhWFeudtjiMXNxPC9A",
  "key19": "5ADR1KS5efCoYAB1NhL5h4LiJbHgjyo3FvhryeXWA1ffd7wcaqjPQ2VLSgNm4Ko4hUT5v1EU6tMeen96nh5FafWq",
  "key20": "4PqVrVDPZfASXpKmGBthLofF2oRMjZfijQ9xbTViKaqYeZzjNhtq6zwLzX3cB4LMYb1u3CTyopB3tJoZdKR6UGSW",
  "key21": "25Q3q2CKKE2poyVvm5fnfzctpCRHHnhSNZZfJGyCVKhCHX11B2ecXiKyspTQxKEK6qVoQWQp5z5n2t13fpg27McB",
  "key22": "5w5DGaMWNWDmbSvDZtmMgLvPaHQGEGUREfGqQb515znGa7aVc6j7LxB7zG8tSpdpafm5iU7y3yR82yU5w9Q2tmZp",
  "key23": "BXoJVJjgFhq7a9zbg67zdAh4manoobxUiGZufAQshTKzhZb7UytPjnnzawGYibcfqaENnPVEQoXr53T87V9jNJN",
  "key24": "34bAMhBGnGD11CpM6KxzqtmJdbULiWTEYXVnYy8WSLLRN1fiGqnXJBwZgHfur4JynoJKVvnKd1ddNauXgfQoNYsf",
  "key25": "zNy466cVZBUuAr7cgiRxKSSk9uh5BtPFLr36dxRPfQTQVFn6asWjYbnmg2BkiMwa9MEtLYf382kCVazzSXDs4hU",
  "key26": "3fp962PrvStsorx5D5QaY9UFWiwZHhFN4WhaKoymjQxztsCszqjDhHuoqRhCJd5UCenkr1KBYqhqq5a2JCLeRT7x",
  "key27": "2n5aZFkGhvfa6iyQZws6XKYuSwertnJbP1Z3xnWoTBvbtVbdieQngZFYbLrvA3DkTnDKptar6SmzA9pJbYUfz3jU",
  "key28": "3Ndrg8ajMqoixGpTrYeQJBdB2Lrrse8P1x2RA43WAwDpD4yGjKbGhpkU7MusXmLutnE1ZgNP4EsdXQM57FhLkuds",
  "key29": "5stRHrv8FuS1oQH5gnBh273BHx3F1CuUAZGwt4c68rrn55QiNssdefkM4BkUeEurQSFwq9m7mg6dr8dLVxPNvikn",
  "key30": "3MXwb2pJKhMWuf5svgYGLK6jAGHsFc8oyBawvn6v8mVcR6A7VgCYsiS5u8uENmqFUkgDa3ZGFX6gTmFUdUH9ZKBr",
  "key31": "2da6hb4rhP5WLdMQ6rHmgRrtuQG6X3jaus42ndrF2VUqWvPNAvhaG3MLCisCv2XvNcSRAjPZrC6ycTrzfmeoHCmf",
  "key32": "1kktHuhKwSRA3EDPNawBzHaKA2i9ymuZ4PbQwRMscSrGVh4AozSrMTqS3fFbuK88bjHPjYPWA8XtR6ZF1VHMYpM",
  "key33": "2hR9R6cBQHyFJi1uXsrobkV4YDahJCRLveXUYscrqCdPpVLEFmtLSBWaSKnt4DyUmmSkCCmZozdgUTpvf4S11ZNH",
  "key34": "4gtuuzSmvjv6BZWgYoeQ93j7rvvyFftDa9ejPNF8zN3J5qDdHtAtVrBqkQEMJQ8pv2n2by6jUba8PPc2r9aWFBr1",
  "key35": "3cLvMsr9ChrU4gbiicFsEuB4bpeafrxffZyyLmdBe9TURjSbRxwQK2ru5635sJmsePSPK1DHaNt2jtDauHkJoSLc"
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
