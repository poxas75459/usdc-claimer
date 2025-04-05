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
    "5uqZhvv6rso2yggHNiZdxWsoNUwwmm59eztBCvZCCWnXwf3ahRMMuUVKugTzYkfkFcGfhuWDx97dofCivgreNw5v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fAEMCyEGBMxSXPXr3YQGbiq2uCMfxxqhZaUUE5ttHJ7cyzzyHk27CFAx38gi4jxzYWKiQtQv7GjnjH2naApg8m1",
  "key1": "4J4ERKDqBs6hpVXwXExR6yHMz4VSSgK3AgQibPPaMfgYtrBMwNem9oH3MxUEvBRX31WuCFEzXi1KsAwRuJyeNyhm",
  "key2": "3bo2Yihi3Y2Rd18jPjgQBkv6BYnZ9zRx1xCoZp3EvpTwv7iC1rfzHf95swBkpZfZwXpawGnDqC7DjzBv3LsyLF51",
  "key3": "4vRE5itJ6t33ei6dJh9YHNuz96JqyUVZJDmYLXLo4reeq9XhhKSof9Ut47HgydEFuRsbrWJukSBJpwbanD1GM156",
  "key4": "ZnvEv7WzmtVLoxU1ZsBPggbcrzJZgmLkY7suCZ87VBFYwMjm8ML5dKCXC9rPYuuiCQTJsE5mZukhucAniiSQ9LH",
  "key5": "4fUXW6Dt5winnubNC1uskwtRzMsDN63ZfnVXyR1Hu7hf5d9EwrkzCNyw2NSTS8keXNaDdafcgJ8tkovRQUPMGasV",
  "key6": "2fxS4pY1zwCo13fd6ghna69EiWsymKruyRKCW1KPNQeeXgdbTj2xjvtcqmSoYvSJT343CUi1u7eM5WzRNfbFPn56",
  "key7": "4a6ysnUTyf6qhYagaHuFzrwGGD3BaCRiHM1wFRzNkRpKaFmDmh4iJfqD3nyDZdvWaVcvYAfAKDGVudwg9ok9TuHe",
  "key8": "5T8ff67frTvLCA2sNLt2UrUZi4SyZdH7SckjwCnerRtk1o1HHBrWgppLPCKEm9FqKddxfcZNVsJxaK7keHf5Hfmy",
  "key9": "4R8QyTQX5xgu1hmwMSF994vkJ98RxrQuXLfQoFpxaRLQhc74sghD9rUgEu4HwsXQRNFp8FrQLBniAsUET6PcQcXu",
  "key10": "4R2tWgob3xVTdAVroxhGBKAZBi7WuJTD4xjhcuxesYWUw2J3a7c2LD7XKFh8swHUXxJuXCsTq3TvfStpKBjXJpRB",
  "key11": "ka2GmH1kUamoSVBr6PemF5wVuddzrVor6AEZcxBPmPK82DgoDWxKFMLtzUeSHB5aTiVPu1TVdiVxWy5XS8ZSA7M",
  "key12": "5YkSQxy43MVjTXJCApwZSZMzN7UCuyQJHsj93UNoPvesWv9n5wrSWem3N8ARFAwPB1yAAo9fdy73GrP9usC25yFD",
  "key13": "eyZddSWjbhv5LQhRnVcQkQi2x1CP2foaHZkyXT4VMGQnGG7nnA2Ug9gx8QQBPaeAhiytWVbJsrrfzZ7XnENdpuy",
  "key14": "5SAd5VcPP3D7TAHrqVeRtavi12Gih2TjU1ATNtUK1mDbpDr1ET7Qo36WSwQnP6vy15w2oVzyzkXLgWDrsY7WKybC",
  "key15": "4zqWUumTG7YodYxwhUqAB2FDAh5MWGd4q3tzStRRQZ81hoaufRfiUkZwkmnwpBkAforyvjMTbinrZ4H2kvbzM6ux",
  "key16": "5bp4XaYtengo3DtFbM4iGYPjSYco7MKXAbK8pyRKT8k1WFRX2T9NAn4E28idznYP5bXmRK5ouUJCHPRT9Qdtazfz",
  "key17": "5PZmJmsunTDnJ1PU8Ld4CSRN3FqYSz2PjSinZwqm9EBPBNP4nKzqfWTV2FaTbJ3yR9KhknZDJnBZUrJsW77gAWdr",
  "key18": "2rna9a1g97UCnqc5Lo2BP3QtgDoZ7gZ2nNPvRgUxQEu3JwuXRN4VZNzmPazVQgL5dAhqFJSR3EMDvfpxfCBecFwL",
  "key19": "2pQ3Q6z6ggDumj4sDcuUFcEcFN3mvbdjb9Nz2E9npbqrFjbT1faHQvQxaEwBcjCnB8wJZVXdpGsybphMnp7RtNay",
  "key20": "21m2eAicNdWeENFyXg8PYFdvfotqQkxU7HJBnMMYvJsHzeKQ2namgEUnyDECDo8f1KDqBYZFv4aK3WaWURqnQ61F",
  "key21": "pN6Y6TKcsC5YsUKqUVHMYJZRnmHKhznvuG46su4cLTBVNUCaxJGjLorWjjoEhzy41rhaNSbYiz5RJGxtEHbAwgT",
  "key22": "4oK4JMAuaUixU2zufvhnh8v6bUBSpBwF1r4hKYo59zonG7kQz2wX7w3Qcs5Gf2hzBZ7ghHrGUdH7PfGzNXC2QzYJ",
  "key23": "5oz5hbg4UNYenn8PNL3osu82jqzzruQsc1TVhukTCTeXmZjWwR46uVXHhSybm1qryAVUEzaxHByXgm4JJyKexMpo",
  "key24": "5ffvcemUAX9p8yPYfTGBL6wJmU9cdqcQY3yFk3QM97JyWNFKZHdW27zkGtFgEYSTWkcXczXchCuZeF27tUmFC7Dk",
  "key25": "Ns9EPxdxKV6n3chtfbBEdxHiLEvyFo2PmyMJxfr9hzpYkjGxpmJdUxutsyLkiMmomTYuKVNmrjFUzVKkY9Nv5PS",
  "key26": "x2TqxsFr1CVzxC5dx8QZ4JemhnJfN8dvgZSzDaMWEW3MqgKoUCiba6dfMMFVcpbdkQhNNCppSn2fEcaP8fAitJu",
  "key27": "3PyyrgsJHXFKYyLDYCJo1uYKa1KT3tNGEp1CobSng2xookUNBosT3Qej6F8q6zfvHVx6vKnWgtHsRvM9q18ytMjo",
  "key28": "4McEMnu3KtBrhke1X5rVsjaxTFG2p6Sa9RjmTUHeMifo5VisF4KbRNBb2oUupyzJiSsKNjbbS8qqaLXdMY56b6G2",
  "key29": "34fvYBmg8ZtM6sQ6sPUqPUg3RrbTePWdrhecgAmom47HnKxhWACQtLzdBsBocqq5QeUkz1MBmqdQs5QVS62x1nsj",
  "key30": "GBffQLbwNycrkGAF5buvSdAm4cnA1B2gymzpakDHVuZtUCbUyxdwSpLta28fhEapS1fBFiZGDxgNSoJeRmD3Ktp",
  "key31": "2noPdiYdSFyLHVpnKiHgeoeZQYDM9oobJuMjiRQFGPeY8SjgzEDVCcydNLxeFAPnRs7Phk1c7Ws1Mn6hBZ33fuy4",
  "key32": "3HUm4sZxji5Zmc3kr4jcfVFYqtxYjs2rTiGXHw7eXd6Gc5Q8nkWCz8rj5Duts2ZRKCk2JKTtSzcTTsh9nJLnoPrU",
  "key33": "5nWJoMFt8459cojZhMobPZCYbxokzqF2qoALhmdBeibJoqYBUJCmu1kKgGKdTQapPBvUEaLwugBjQNB3dz4EN8Ku",
  "key34": "5bWpA6C3Mvadnbz68ZuVMjo4aKFrBaV9D1ojYFQA1XfGUQrP1x27eypBZHUM6fZS85W6gKZLYCTTTGUGYAypigHE",
  "key35": "3g5N4XMJXGTqXFuf3zH3zgTwEv926jZoRfJRKk26VdPD37rxRjPETxYZDd66tqsCjH5Boeo3x7ikzsgQfo8SLUL1",
  "key36": "4tPEfnFHpEs3PV59ao3zBb46effRW5LA9tH4rT1i83NmvMRYiMsCfpdSmC9fkigeMDg8wRYGCyZnhBTpQo1S8tqe",
  "key37": "4QgHYmA6ZLMPR46Z2mMzFjrzA4SxEEfJRAPvtqNajxpECqkQocX9VFGQYmpyVXRt2TZqaigiZ8w3NMNrd4BVZqn5",
  "key38": "DmxHv3rb1NzAX5tmJC1P85DfESSiTbjMwe3uWqjvwAVC87syZGnrZUaw5BFgHZAsSARKCShLgJ8jyzo3F5K8v8f",
  "key39": "32Dh3md8YtgKabJ5SKreAzh9kUp2XQxERBjKPRyXMhmpasfU6m3qii3ozv8pMCC4onXSAUdq9jKVtbcdhr5SDGrY",
  "key40": "5UdiLevKT6NFzopfi5mMzcX1PGjAyCJjkB1essfvXjeFTWAuDzWCZm2ZVzUULvGVYULBW1ijHywNTFV3v8Yfj5AR"
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
