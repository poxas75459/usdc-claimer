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
    "3fUNDapfycGsrn81aex6WAb8ZRPwY5Sbkm1b2ahqzJWWJZQoSTfh86pRWAmSypzAUo36ayMrVuYRNvoEbEPQ8xSQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Th6mZkWoqAVVPJ1cFiq6mMe8WZqVpGGNhBevvEjJdCTtH9qfUuFzwEjzHdwjps77idvWY7eDF9CrDSzj4ry195E",
  "key1": "3BUczwGEYvPDmBsvgm6zCV6hMJX1QRTWMDrtRtiX92WkvnnXTMYTBYqyMkrDvYHedV3UjLXm2RvqpAAUKibAvphb",
  "key2": "41hdJv7Xg7sCSVUYkj7CtuPA3wocxWUEHzAUFm79FMBGS79bxTgeQxAcVcLnqbS6whTWL78CdqwKBSDNd1NutS7V",
  "key3": "3kp2TBimbLPPHUHXWVJLMVPBUW4wv3CLPHMqYQ8exc7mTc7bJpiJGRMsuV8T3SuMWFgmEKT53DsVK4sBJUdZ4ZRY",
  "key4": "66DEMB9Fs8hGQcwXXB1zfFuS2YtviHKkQy8MqkqMbXqyAmDiKRRZxNsdadfvQ1qYp3WiJAxRYpdegnWB6DbTXrxq",
  "key5": "3nTFUrouRrPtJ39Fv8ydHkyjGgSifybdZXZv5udJe3yd3pyxUWK8kPUbyPLXJmqjquGEiw8AuBpNPEdY1yVDWk7C",
  "key6": "5TLJrTGTpDk6ijLUDQ4HMvbzzpgGRwsjHHPEHWvQLTskPdgpnsSMt8N2Qg7iXzVE1TFNvsF3hxwqvCbMTcYviAzY",
  "key7": "2thDaCowWFwJaYq7RWcnYWiirDdAgMQpvE4rrMUatcCpZAELW69xs5C85m5MMGn22EPobyEmDKrGC7bL6akS69Eh",
  "key8": "2cz3aAwYdvoZPAd5gArZ34F8RYjyG7REqQoQ4z8UzbZH31bs9Sk66RjotyxHkme9cv5pmNhiHZYUXs3pikthqFK5",
  "key9": "5jwkiUpy84imtwyakc9ujhh5e7SVUcBZAcaz1Qyk8ER6KAvNdVK3GsoL4kE2LW1MtgW2iqkXQMPqkMkDh3B9Pa2Y",
  "key10": "5fwgZczCSeairhZpCXNi2i1cPvtacijR3DbZUEGXiKaJk9XoPLtPKm6GHcWL3xML9NZ6PeCFbtjUPEmh2wukpoSS",
  "key11": "PBok6EBqNAnfW3jSC1iWUEueVNawqc6qLdvKQg1Z7LBeHxJoffttkUV8SpQHn38kPJSmoEM3YM3oxptEzKaXMek",
  "key12": "2SaaoG4JCk9QkFZJYuZF5MGuSxrzDFrsW2JPghLncS23spLoiS9nmiT4sfDt4vQrPVzJLJo6pR564QZYPNHJ1QW6",
  "key13": "5RZMhEYbofdBcgPATjKfLg7nZ9DaNaNeWLoTkBTNfff2DnBSRVAjAGcw2xi4fvqoWQf3ZuWEVmS46u8UggrjpvFV",
  "key14": "2mpjTB3f8imifRBvFLpw82PFqEtajhDEexk4bkfXHy4iDbmPTw4RnXhc2d4ct8GWJnfzkqxin4YR45ohkqzMvNBn",
  "key15": "4ZkvRBQYTLrH3gw8XjFPppmYrbKqe8icdGzhhC2f9hd9FEJ4Xn5NGYXBdhfHrgdXaJmZ78EtxoT1Eepa49mmZivn",
  "key16": "3FE7vwNnSz8aY6xbiYYbaRT2a4gQbHZYHVeB4ZhnV6JojzT2BxEuxcL2K8TZo9ozcTA9TAqg7JkQG8eYng1W9cSm",
  "key17": "3XsnkqskqtfXqBN1m9JbJDUH7NL2angaTU57UnkUTavs9UFmsj9G3NU3AgwnyrWRsDxPnn5TFrZniYS6djnNGdEu",
  "key18": "6TLZvYhyJC9qzonPzSfA6xfjS2tMkLtgdLkag2ms3TKn6kXARbAe7wFX7KHDESRG6gABv4LheGM9fAU71AxZqur",
  "key19": "3rjqBVTdFzuGjXncABqw1xMDQBAui2zsEfyqewqZwdk5fY4mzkAWUeXtQWpg58WKrMczBXW4kxTK3ZBZPhqzRLC7",
  "key20": "3Wy4YGuJVdsbXaJYvvpzappQ5CT8k7FD4qsJomjVHGkVFiWpDtcixyA2cVvHgLJ43bZVZzFAopNdvwwwUWQEd6JM",
  "key21": "5odBJ6v34Qc3KoAv5fY4bSGJfmC1NH7oXsXqEULodiPGSYPa6N8svn4YrpnHgm83cxuiPKV7wNFVkv5gcAFfqzGF",
  "key22": "N2M6TbVqFSeRD3rJTU7qHUBNc83dn4gXPjsk66HB4DeeQH6NosKDa1u3D9JEn5yzF81DQDCk1wctrVnRYukemnk",
  "key23": "38c7Pgm2T825kDyPNZJe1agaaXQjqFdE1k7PsiQsMjcS1rYgYMPuxtpFBmLF1qiuLQ11sL6Cj4swPKrMBeMheirL",
  "key24": "4YYfmowGTwkQHxLDWAXwxChGfXui1cK8UYM3dsJT6Mkgp6TSGsaJyMfivT6tVkV4jY9scvymFC33vRL8bnq39MZV",
  "key25": "3UfnNurybV5fnsaTc3TweyBvC7MERg1auc9JFbAE5PhE4G1uJNUjeWFHXzkG1kr843x2jrhEfxHb7486PiUXtuZJ",
  "key26": "4HrgWHCNnPzh95JCvEjg6PyFEDN1orQLU116mBd32UoUwTxTUFhxPQUHEoAkNVR3GP86HJgL5M73MTM3Ya3gHaw5",
  "key27": "2oRdDXUs4i1ib7mm3uyMFgxiKSYmBzR5udZRo8cyskmRzNkHiy5nGGpeysdWP346UaJgnzqrSfiKK4T6PDfceejY",
  "key28": "3LWDxe4pkGbstAaaTGHgrKpSgsHpvh4jHiyWkzHTdmr2WKJLSVe8hidxDiNPg71ZWEyLDV2GR1jS6tGpGPGwsxPJ",
  "key29": "2SJcPWXec5iZJQc4vnZc4YRmsiMHtufizfGpQqTaFpXmJifB7j73Zb8uuB8KuJ6XCnmQmPyk6QL3a73oJsyCvr3w",
  "key30": "3kEJC4ECsraNEts9my9GJDF4vFLUaKxXCaFYzzSCtA3CoG2VR4vuHQukciheXCsHwPtYZiLaJjiAUeaEx7AZUyP",
  "key31": "2oiDPJBiRVJLhVLVzmeF8fFNzCPGUsj4fQNeLkRzFfBRyMpSndmmzWpGLJQSq2AACHq3J2JkAjMdjiygYFf2ZjFU",
  "key32": "5nXqVJQ131quSzaBRyMuZD5oS3bBqjkKtdwtoqtwJiGhS5Po1vSjtXWy2sp1oNDMnjZSjJTuJi2Pe8QsdG7R8yqk",
  "key33": "29VMmkMMSgpVMKzbwi2pMReDyA1h6T4Psb6XqWaC9mGo8pVpvjptJRCAvp55BnKhbdbpwimjLsZEaat33ykcCEvP",
  "key34": "5zLhHa1GmQxcCzDXfdbNSUHo2Uj6rEWRw2XaJYWppkHKQkfYq4cbGEPhuqkRyoSMUMWghtSFAiTCHeETdcEpfb3z",
  "key35": "5JqqqgCMZyCJeL5S2s6zgBwFHbMcQrJUZDxjKTDFSjQ6pWqH3hvZXchH7bRLt3KLwF5wx989T7q4nBUwx79wjZfD"
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
