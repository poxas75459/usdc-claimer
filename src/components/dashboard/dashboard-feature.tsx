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
    "KNwyDiqdRXjLiXxNYM7QeyXgZn9fNGg5ryrh2rHAkssYdxKKeJRXVzG29KcHYtd9hPZPe97ixXv4D8bcfx6WXrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XmrvTCtEfNaTuyCG2xCXZ9xVa14K2RDmAn5mq6bs3TCQQUpiGTQqPHk9vpiBmZyAwujHprehQiYqowsicKjBhKe",
  "key1": "2n36Hn2eHZ8nonnf4U31J39CYwAJCGJt7tPu2q1C1gGLLyv9N9tmiXS7kHyCWkwRgLjyAYGP3qVrLvU2868RTzCJ",
  "key2": "T8W8Frvr3vVmH1g7YcXoaTw8NAvUK8uBbhCJMEUKD56t7Qj4sc55VSLVBYjFqrbQCygu3UwSgrvDwUECdbEp6xD",
  "key3": "553cBFFs9rEA1rZDXx95AFBd23qFAnwo7pD3FYDLnotbX7LsCxgSUEG1ofdZbvjxFXovWftdUQFKr6MZUf3dDGBa",
  "key4": "kHSLPeVrrZ55aBNrK2BxUP5rMNdyidw2eHmdJUvrpytiBP5TacAcG4BYmY9XN9Ahqm78JXtEA5aBKH3NxPPefir",
  "key5": "RaQfBPutWCsd3ehgWvyrfTk1qxNWGrgf6Ro9a8VhZvTzbzJNmhJo7f4vib5bJUmini1Pgxw3aLHWSWvJnMkmNAy",
  "key6": "1vppgm4qbnkoqxZv69pnPt4dkS1syLqnKPNVbysgUHqUeLoNSNrEr1MBvAcbFyUnfBd8vmwzGp3wKj7KtJwvsHM",
  "key7": "5Lu9nWkMFrroGfUtD8vGWZyUpTLdospymyCW4Pr7qwnEz4EujTokyLY95GzTGpWPbEYGhhu5kSXREf9rX1Ay62qE",
  "key8": "39JSTURYYsqo9G67iydAdHaYK5NycJm8D4CWnquQJRvT4JYeAs26TR9y7ajyVr9oBHaQJ6AYMaGuDCdTz3WWN8iK",
  "key9": "Kvd2TFtx2GcgteC5M4oyBkkSL5ktw6qd3XtuPeHPB6Ff7kgTFo2EnQXn8LVsft2vrnYRsFiRUcRHFs2CNzXva7h",
  "key10": "3YHC9Vdff7aq6tDVatZfgctdqxTKzSN9kmhQcniwmMXXfKaF2Yp3t9JZJnrYjzDDNiQejrmmWeA2KLqsRAYJTJfU",
  "key11": "3Vm7spdPLfn2juz3kaG1rTN9Y6g7cEutgCHNCw5LzWdvvFt28SaL6pzSK9DzaesEHuettwFhA5qUtQPcUpVXPMY9",
  "key12": "t46jxvgcLtxjqLoso2jU2JNsau9uyqQPZ1HQrqy2Q6fKHta85z1X6vp3pza3HEAV3tzQKeUoj7KiYWiMi7VYdZp",
  "key13": "4TK1J9VXxXL2wZAiPd29ie2gsf9J3uRLufdjTQzY4o2EczgxWozu1oDj8u9rKtaHg99n46AxoqtKh2jJE1X7H4LY",
  "key14": "4Y1E9kYdrQ4TqD16oNWsHZgypoRzZSKhZfhBefQ4DoHxh81gXobxi9nKorNhGrmj1RqQ9wK3QN4kjFN3TViGCvv6",
  "key15": "2ZRN5sCd8UPbmqcRRB6RJZz1DmvhSspT2vFRj9pyF3SVvm3Sd15eEtwaGXwF9DxiQYcoffoJCBzqA3rUAbzyhtu3",
  "key16": "3BaDwXrBtyUPQDrtee6NGXaNusuaxERb3HhrLZNGiMbUFVN8LHsgFExd8D4NZUH7aBWyvpcMQ9UUfwBaF2mM8Ham",
  "key17": "GnmvLfJtnWZuhVcryLbYZpg6acNY1DUhzJRyZqXm5qKqKnZoAy1v7P2yAFqnebAmsR4CvTEPcm9h3ZyQbCtsyHZ",
  "key18": "5qvkRgX4DFcQJB5yCd9zcbWe5GHJgdeRhnbrnZrdGrY7YA5kiNFi2cN8r3F9HEhVBAPe3svzaeRcCRnBt4jRyx3b",
  "key19": "5MABbSGD7G5ytzpHra89dHofS2ktfJvAozwRckgZhrQjETVgaEyp2abJnAZ7MSJHBvtEVqU4f18ZnSJFXXyKgisz",
  "key20": "25GtmZhfhufGpgNoRDN44ayuQx8i7AwK8Z2DdqVCVKTVU4DxMDSGLZQJ8GnJyfcCRmcxyGYKbjK8mni4agQqbdR1",
  "key21": "34hVddFohbawR1CcZW6YYQTaDC32L3UCkvrJsYaJVhWjMNVUA1cJerJE7SgrsCHikazPs7aCJ4BGhGsmuCS7RbGS",
  "key22": "21afojdx4KwtXBWrTaNKGNHZxYRoXQS8xq3PpTqvgsnD4h2tEgM7eu29gzPVJHhArCn25cCS4e8Ur2XHkrDgoGKo",
  "key23": "gNM7THkb3hGbz6sK6CXXcGqQTTUFLEjUmT6EeMJXVrzHDJBzs7B9mM72BYQdWKCPpS4PokYkheXVBfKFMp4yM65",
  "key24": "3oehQXSPUsh4nkvkX7KvwsYVczVb99chjxmXiorUzh2fCypUfpYpz432JKwFKUz81uAqiFMxgpcQANTWHbwTXdnt",
  "key25": "vteszB6xvgTSocKDLduQV4LCNLkfDbLzFK16bbwt7PxKULbYRME1Z4Td5RCDjBLukZm7zuyTcugTLWqaYzEmF1x",
  "key26": "Hr7ro1PF5SsNf5zSdy6RmSNqPwsrf2k3MDgfTQCy3qWLjFRNSos1uXvZ3bxjc87BVAAX93y68tbQxbjXJf7JWkK",
  "key27": "4TWotmszh1UfNYkkKRdHpbYSSYPvwKKsBVafKxUGDELdfokDzjFbALUWeCWdDKPXUgW5NBPGvAneZLzShKpfZivW",
  "key28": "3nPpCjpSF5QsEukXUXmRauzqFDzjCKf4LKpwWg7Mm8X6ZDwGJHh3iRbC9jvCFCfS41Ctsr5pAzYSRvvXfTzhniLD",
  "key29": "61Y3WjAgZxazr9Toby5iNa2NnZWv2qUu9A1Jspzz5k6U4TFH9iCtKBmLp7rsAt2vP56WhPDGX3usbXEx9myqmdxm",
  "key30": "2BvM4B4kXWfSLpThs5Nt64Hxrt7PeJFZeyvYta8xvhU8FJEjARTZ5cWdPATYUDGZAr4BHWRW4SAHbrTqLJ4nrNj5",
  "key31": "4BdUaasJasMWXF5DRtyfF58nGZNfEV56qYsiqzRnC6BJ4cLuNeXLyphszaMBeMevuFnPAgUYgUZSSU4Mw3muGfuW",
  "key32": "5s3x3eaXMyQvsaCnivG7MsQuwwAydHQboJw3JhM9q1BXi4k3KYF5HmGNt3QUUwGvXDNLfL4QLGUsfc8X8b75RXTh",
  "key33": "3EiSNnZR861uHfKu4hzPmXWQYTyjKYcGbUpCxersbH8m5wszTD9ks1JgbMiidnG2pqLuJHtUKEmLrPmYVTUr1ksu",
  "key34": "QTnRdiy8XUWr3BG9wiZrrDFfYYWSvGd2Z6MAgucQr6SWtqxUnX8ZnvnyWPA8BUzDZum8AXU63UdSL3mKFmVg3ue",
  "key35": "3xXKuGQ5e7Ftiez2NFmtpt746hPDjfKzWZt5xTdEnbaedxEhSA7uPKRvHLktd52vtg6L217scjjnNsD9adUm6CRZ",
  "key36": "5Qt5x8iezfQxgPNXqEReCAT1W7sdr8yBNqfVYSGdX2XurJsEmhjzBBgDyaH3JTbVo7DdHQt3BtBLRpPoTQviDUPu",
  "key37": "5R1e8FEr1jEzULUeHwaqpXMVrAUoRwqH2M4LmLfsgTuNvgz5Gr9ocJ7prVxT4Rkd8fzqNMRHpqdz56ZFtfgNbEwX",
  "key38": "55RdRRwpktgJeNK6jfgCaJH3MaVCRzwEbw8ahHwLjkomzqHDDzLsg675sVtCZxkZDqfckeJoRjssYVwYz1pkisYs",
  "key39": "4oECEp4VuDW3gHUS7x5w5Du2559N3HSHpR5ThAq3CJUT1sC8TYNrSjAtVVenyyt899rLGGqjEASfoeKUoEgw8xb2",
  "key40": "5uhU8hLwp5mnJLEHDqFwc4PD5P5nVTPoNaFQ9zmQPGvbVHdae2nptzjjXRQWFMR5U1MGFhEi7PWXmRAZBikYR4nP",
  "key41": "4scVBp17P3sucfsv3iCz1dHqaKEcdU8WxZ6dM58VABXD82ZrnrhxvoFLKFxL31kRaa7ZBcpfoQBmqKDuvXqv71tn",
  "key42": "5q1C3n8sLVpRUb2L4dyFuknkssQ75avDHeMuu94cwdpnPGAXv4HYLwJEeRMXsT8xKffRy28swwwmJJnssSfrPz5w",
  "key43": "4RkfeoVAiqyeGetgw8p1kfintkN7CKJ32yA2rYUisaSPCtPmYWFxdz8qZKvuiBaa8gLH9xW1Wzh1shgoYoGy2Css",
  "key44": "5HQGGk62JUcCkxGeBkgbaKSudegwjaDB81ceGEyQMvcz66DejCoReWTLPKm1H6ZEqeFduX2Tz3KxChJamqq53z22",
  "key45": "4ycABzzsM4F73CLZ1s4eiHLVNKTxTU1Z781P7f8XjMvKbaNtNgmq7Rg4YuyKB85eyq63dNvLJ8M6vaM51hnRygXy",
  "key46": "4uyx5gMAtms97VDVDgewFLbgAE5rjm7ScTZxXgA42DmPXaPBjm6UzoJaznn4DTP1BFr296ZK5XDfp3HeTo586JRW",
  "key47": "56xALmp5oXkdayYJ2Rjqm94NB7RLtbWi7cgA3TzzwSSaSjyzaeHxKiZLZm2xUDGziz564onoNCK1PAUCDKHQyuFa"
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
