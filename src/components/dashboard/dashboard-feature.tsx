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
    "4PGeEJdKf4wBRq3StbRBGsmrbSGYSrQeiwFijqC4U3NjUs6HhbRkTmkcTs27oaKw2EeSBWcZ498Kk57MDecTq1Uc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FDD4zDzXqdE2tc951gAsvu9xeC4M67WNavvzv2dpJd19PJMDUFmaAkpZJ4Tj6kcZ87FTwWGJ6hukV9jYoJbfTy3",
  "key1": "3BxRGfXZSvZ8yfWLv5HaSw5yL5gqfqrq2k1Xr3z3M59SPePfwm87K4JSgTbAzAohWiRNP7uoNN39Lj3pNFHwoBvF",
  "key2": "4sADRqEyr1z5cSWBRoSKBon8zkmszsHce9baHRy7zANhqAFBrriVwesfnJhz2odNeKPAtcSRmp9P7wXNYmyrchsr",
  "key3": "5U5n6gpuzcbTLHgBcLv27Tvjqg88r987w4LACtKzKGW9shB6AdjJKbr1QdynaK2ghmzNaXzgnsjwkW2jydczQEJ4",
  "key4": "yDH8WntBQM7P9H3cok1UY2W89WisPHzPdexvra38rfhGLhMK7BfF89BZhiwttcMhx3b5hHHf7iJHySjPWduDboh",
  "key5": "1BhdnixTNVCGUpHkY2ikvp2Bp1SUbWCxEXhcXScNqYSwkZmh7TjuEK3KgjpU2stiAEqMwBvEwHoJrgxzGr6XZcc",
  "key6": "5Mbfv6QMWEau5CQXjo7QPSnZQSuuyNCXqVrx3by5zcsv7sRcNTxY5ox5QP2uvzT4KwZAKTbCeLwyCMjnDn5gDcWE",
  "key7": "3XcHXYEu8ZRwj1YgqLh77wG6r1VEN5YgrcTRYYhmeFt7x9RHFkwCWqYNQWadN2fgesvrXtCjN4cJYSUzeG2cVPhm",
  "key8": "3ujJaqUcvcshSKND9dJGkxR63AZsRqdi6vNNDDi6hHwhmrrMjBrZyEKLLPitD4tw5NAFmgfZYioxCtdo59ohJQoX",
  "key9": "yE9MgwQ3ZvcyviQtmkp2nGD87uNwbAThFu2VLUhU3UdzFyLYuQAns5p1G6aFxmYNksnDAGFZZZ9o5w3fZqYUBi7",
  "key10": "2YoY3HGHWufxy7Wm2SAvw8RwUEryqx4L6VRnvH6AfoqNaNNmxs9y4Fju9YCAngWoPeCsFWKr5GtzXUGtF8CyREVp",
  "key11": "3WPkVtccokdQMYUoUDgXdFETbjPboeFCq6M2kbVbf7xSoziqkiiUbZU2httH6Wa3yLm5zuTfkN4qpCTC3AU4yrmT",
  "key12": "5StVrBfz8eCRLZ9aKQ4dHkTL3cfvmoUFBVbQuRLENaVjDYbEqwXT9bv98yJej3gbDE4JJM3Wb1hGMRjoQRaygzwP",
  "key13": "3vrb3Wd6araPyZJYo9QgcLrTP89YRFGkyVgJ4DEov7hZqG4jKFET24dcxj5BQoQa5PW41q6pho6Nn9DEya4jVA3N",
  "key14": "3yoiE671GiTvhJn21HNV9f94zGuSaBzvk4Jv6uSmTfL2NwinhzzaYMCWpXFwNLLodPLFiyxfGJDw9g7bxjAFGd2c",
  "key15": "4roZVhC1hFxw6GbRpMbZywiEoEn1h6M5yA69ZFksRjge9Z2vDNxNKFaetFj1H8cXnedtxhLFbFAnQKk1msU7arUV",
  "key16": "5zciKDfMX6Mgis5vUBbeLKc9ku2MDJzrKYvZzdEB1ZUDz95PATHLYozeXnSkadXkwGPtSzGEKHbTAGXQT1eqJNQk",
  "key17": "3zRSWxme3F3xETFK63pQq3vkMoMFUt8iaXfqvoz4ff7RripV1SiWAqM9pFaJhw3qe12wKLUWJ41YFkj2BTAz7cHm",
  "key18": "5J1atrgLV5oGJ6frEVarUf957PC76rrsiq6gSENYzvb5m5h1Pr6P4JZHa4sE8ePDnL312jbHFBNkbaNr3wphJfuz",
  "key19": "6f3EtK6n9ZuL36jYcVJS4jmkcS5Aqz86xvf51GFjQqgmHk25QGbnQ7BGJPCUbZxbpVDF8HsyEj4qsEDxDZQPiEH",
  "key20": "5ryjAHurEJCE1qVxt26Xe87q1rtK1EGVSiW6SaywWv6wQtbPoHj2b5LJEFk3AT31upyPvyuXiy9HYABzoPmEXheZ",
  "key21": "2jDAThGqXWt4ynaanocUW9eBFSgZhPPoeLzD1PuhNMH7BWTHYmUCJ8hWS952rTbN87YnA49yqdJm5A1YFxRt5BBq",
  "key22": "3Zpqtxbqs82H5bZACzJhVtVFK1S4kb7TCeLyuqeCWHYDszqn3imEuBo7Fx3eMcCGJmDksj2UnjTxkVVNViou543Q",
  "key23": "nXJmzwS65eQ7m15b98Wg6gJLbiuoD2aMvdPet5AvTJLPuMYqXZpWVpq72ePi7yeZxKbNknyG1p8dvmSQZDHyP2p",
  "key24": "2Es7Z4oFnFVv572xUvMD4QjevADJcJQ1yjSYas3o3jTm5HfYEmzbCdDKjFXYzDWiJPfjouwNijL2daUZzwNjifat",
  "key25": "2B31Z24qPqorGgHLcnJsgCi6PstfdghL6KZDGXsPPhYnvksJGanbMroJhSJgcVqaZ9LQfyRzQra9jFEecARip9kK",
  "key26": "38e7F8PKGpp7MXuLxZg1qhMSavFAedZDPfx9coJQHeDg2Si1jAnfM2tyRUXGVEgUvfneaYUnLQys3kyK7kiUwrf4",
  "key27": "5TEXF9CjytbNpQcxxz35kpSLnKoz6yHaWSRdNkJAC9vgMKpKru7M4baLpQt1evkjtWabJJBYfCSHc6xdg7wBLfMP",
  "key28": "49r3PDqMDPgRDzBWcJmohdJ4jCa2UggVT5EoLGoiueS9aLMjhAtqg2tMDW1sb9DXYbgavNmUvxwV6hGCP4yeXUdX",
  "key29": "5hGLNitDWBbizmym4qS97vw5Lc4xSXKu4dZaBRHSBBWTrcBYnm38aQLvcmKMmG463CREJwDRQVm6DN2Rc2cCupsX",
  "key30": "5fmufvXcPSnHKAxUqSWDi46eLKbwyeAdiabn155oqYWPEUy62e1j4Phbtv9TeZogDmRUdFw2ZdqdhkSuaecWV1uv",
  "key31": "1H7dphYb2v69PDVdu5qgyZFZmpmdBgJpezPC9UH2Cc36sURtwbTGih5pnxvpH8GSDXt483vkKCUb2rPnPDBpWbG",
  "key32": "9a9NDFkoozURXxkSX4eVq4vQk16LstQVXrWLWEGjeitndRqTXbQwwGvAJ1oQj2h2DzcRH57J3mmThEbbRGXnGVd",
  "key33": "5mbjJ3fUQxu97YzbUgGmKsVsjy3iUpa95WZ5ffUxvJf5qMzQRrPM9L6dzgDQYRdCBBCrw7snGcAHBP8JjGFseBAj",
  "key34": "wkKMKajA4XojTrNsQSaKvGMrEkqV68qPBMXkbJpgBTNXPSC1njJ6nmABVsZJT5iH5vNZsDYSqtaz3qeeaYkqTu3",
  "key35": "31Piezoi5LpFhBotMqeAaBmHUxAM9jkzeH4QYWVpuQHEcsvQT7sLZkYFnNyFhrf4ttFhweRhN4Kz9ZqLFbGVG4BZ",
  "key36": "2GXJkqnWY4v4Xr3wCL8PqKo6pAUdhCDoDXELnAPUuJ13fzJ6U6bUTKYK6tXSn13y6yZ833hVoKabYX8paomE5xyY",
  "key37": "5yBqQwEggibBSuzcbM6WYwDoaLpTyJdAMeqEm2oXcb6KaqbrBEdFdCdimKGvkEACaHVDaCy4vAzv4ibnLSkv9ejM",
  "key38": "MUWVZFdyk2Z6vb7RxxZSchbX76sVpSDNnWX6h3RrFyim6ogXnEi4BqjgTgP2GnX5kwxmssnCAz1siHJuLpxzhGi",
  "key39": "4K9uFmaa5AMX1rNwWt8UChjDoDjqq1CintvB3G8whVEhqB8zhhZpyr6GXFucpcbH4pieEWXF9hX4rf5hVVmRh1wv",
  "key40": "3D9NzfbYAkFy3uq5g9cE6aevk5Bk1LdH55qkJ3Pwx76hvdWJnxaHQPZcSqN9yydjD1rmSe5Y3LwpVnwymo5wCBh8",
  "key41": "4EkamFLriZFqYn7hA8xzzzTUpT1AU6kefUPZg63CDm5dasaCb1yeU71t8PE6AUZcbSk9uawH4LNpf81KUspACzKC",
  "key42": "3MTWeBW5gMGnZqnFzVYhoWaM7roKaD89BPjdfXmGangw7zHjLnMn6qeQsYEKRBYJYqPBhFNYEQ9AMGk534swv7N8",
  "key43": "4f5eaVwECMaVNcKqBPHTZS6Xnns5RyA4zJRz1uMaVjPio6FegqwRkdTgHnKFUoQNMtu3i3AGyr1UKwbHsdnunvLb",
  "key44": "5fJHMzzfVRpM3FxbMS8iS7GX44UddisaHf9pzE5rmUwe3zoXywKPQT43AKx1jnWaZg4YiMN2ZkkioSrvQHameHm6",
  "key45": "aovCi8USrK4kMh3ppZJpEDuyQ1xx9nCjNpH6VdUn1SDqxnERrbbrpk9yemcHDnUzpFnZmzFARrzF5NLfEd4d8jJ",
  "key46": "5HF5AnHxZakHLqwDgW63FPNwdBMQooX2qm9KpUAPgiJMRHgbdbiw6VpRqJm1oqkymztJYWgjaXKBDWCSj3d1KT39"
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
