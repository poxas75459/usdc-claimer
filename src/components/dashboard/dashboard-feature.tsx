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
    "2pV4QWtwfHTfk5qix7yk1ALSWbgQEvGa6YYN4N9yANEJPHiptwPFPsbPJJ9W8GzTjkBPJK9Xs9YuQTiCyJGQZFHB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gEB4gXBCH16JhfewcuFiHBAS8zLB94NQZZMjBbUXkDopJcQ3TCZhJsELCpfhzUrtshYnwk3zSrauJM53X2Hjr1k",
  "key1": "4wWyHBgTsc2eFCZ5mjNVGRtkdRi5bsjPScpmxKQqHtfqxzTcaTWarZHSuHjtG4Qf3KrHbjKGAD11XNF17hodQ3rY",
  "key2": "2P2QdyWqGcszRjsxTiBxTVdZnDK1bHbfF7pSa2cCSLQFWhJqnwgtq4G325tMtQCmK1ikvLvwDoUUTWsyN65nNr3w",
  "key3": "4HEBsSTPxzGYCB142f8qf5bYA49koACETY76LyCiKoytCp2RQLMMjcmMURAvYPXVqQg5cM2B1wKpTaMz9qURMx79",
  "key4": "rbPT1VM5XVmfyEGU96r4pvq9upSAmkWyqTc7NpxeSueH2HcDQFmnE7xj2n2jUZsoR9YXJxEPjcTdAcHhxXfwK2j",
  "key5": "2jFRd4Co7Qe8DnfHdzJevnKsqKoAkicYLXGV96pGFJUeypsfyU9oAvFbESeg3kmy6n4CFkyeDUrQ9YzM4jeXCdA8",
  "key6": "fH86GmGEhkfA3hLEBpTf5qfoLqgPgRnqD8aCwckwnxhj2W1PMeAzaYtcK9eshX6EjbxyWWvduiSBmExrFAxyi6A",
  "key7": "2hf5HhcrTDkjzvmzvRUv7QDSpZR9cM2EEVd3zvES1ZRct1ejDHEWRXEqRMoJWKBjK24hFYwEBM3w4qvgdBpLeyQK",
  "key8": "3pn3jHpD7FV1pVwbsuRsM9K7U5aWuYJdvXBEQTiA4KxivLoPG33s5kUQnFJoEks4tNbdgxHJwGedoj5G6AqjfTwg",
  "key9": "65YcTrt82fhXGnmMLjRbyFiBdo4JBH9ejN94HkSRXSfdxNHuy5peuthFPFrbSiTu6wDY99Vc8bAw71kT8BUneseW",
  "key10": "4icJZuwDmyHqFw8X23YcJEGHJYkngfC2jpkwBNtXyZpy9vTWGWgbVXAv85egfo5huxc89dcrhh9JDXhb6ofKVqrA",
  "key11": "u6JdSiv65uYq9YAonSMExt16omTAbasESVodMjTuFKLtwzMfMLhoX516r4FfXrciGRzTRNkMSjq1b4wiYfjHYWm",
  "key12": "vtZz8WfVo8y9uqzpZ8BoPSnKMzeLFow24YAmpTDEmoCvpeWrmC5za9SY7xw2rss2sgoPe5KXKTfWRLtCUSTd51R",
  "key13": "5hqRLLA2RDirTnsD8gPvmPKyPfvvh9RFTXjgd8p8LutvTEscVqAEnHKwUfcEW5jgpeBquLhCmucR5AQvCnDDwPZ1",
  "key14": "wxfoDVHfTS5Y8kkma9QmU79r4LwumRmY4H2xnpuW7nM6Dz9nsxjne6kz76Sg9KqbKufix3hvxneqVdwVTtZv9Tv",
  "key15": "5S3hAjFzcWxPYaqoKsLCmBhWYL8Zbdxv5mb5R1Cd2fTatum7gBfjnFAbdah7YkFCqbAufcKLHRcCn4cz4pnxWTCZ",
  "key16": "2kVinnBHv1KpznueRG4tbeke3t9ooypkMRZ8S8vV7ye9zGWYkgPPemQWL56ReraFGpP7J34TeDhq3yNkFHan7Gdi",
  "key17": "37kt38Gcijt3UYU6caNnVhdBtDvDWzqfcaoZZvpDRg7A9Sj7WRT5WQRnULgt8fHqD3vjbH5qRNDE3mxiAJR2epSX",
  "key18": "37HRaLWJ9SLKN4x58hjTqYALXubA8yxvVJH39WZCfcgTfqnnY4YCh9HDjanTxzGoA6z497FSRXgtPWn9cEWTbinY",
  "key19": "3RTtt1ZyPHe7WJexhBC85BtrT2h8d5Jshj1X5jGHXFkxKTUdymFNuUQvU3xSmj9mhyCW6Tu9tehKXAupj42w8JHP",
  "key20": "g81FnHSux1ty4ZEGdA6PaPe414aLY5Uo9aZobpnWMLGBWo66EHcaVhBo3DJXJAJmGir3pb55w4mJf2e1mJN6Myu",
  "key21": "QcFfjp3yRifNPhZNjKuYtNCRA1uEgTVYy4ihY4G5BzAeJkPvo6GtSQc7axBSuqt2ugaLdhjgFRer9t3XQfk3mne",
  "key22": "5shHfZ5M9TC2iTqXEZyKsFKFwgVXp633mFJHrT9zuuM2txVhcpnEg7uLEng5fQSqVL8G6U72aQXNK4vDnESKGhfk",
  "key23": "xkRufAMfsWvXkBnbAHydfnYCGEvPK4CzktFLRM7iK54ef3dS5DqTR6sbFh1VZyNoVXtLPRYqqqSRmJVCeKYMNwp",
  "key24": "36qCK4vNBfJzFGNsRNBSzofexeAU2tuYMRzjEkT44igaa6RGxv85Doho1ZUb168DJu9qtqCvEiRDF4D7Mrqfm7Wj",
  "key25": "296PqNMGEzDx5tcvLzU1uwk9fGxKGeszJyuZVa32qb1vMAKHGAmqGJM1YvkZBBWEG1HXrnhFsQr2qQnxjtGThZzJ",
  "key26": "5zNnHnYnns6X5NjbWHrHYbTGadtYS9YdXEZ8Ns8nf5iBycCgWaiuKnjUbZyozMTRka3NjMWErzrURjhwwapcmU5c",
  "key27": "ZwYyCxDQcwznnCpmaHtBA6YPENAQFYVRrub32FrquEx7rXRGBdmdDTmdQs2sKeTbSrH2aj8nu6PLmgrBhZ1xuuM",
  "key28": "4eV9BWifxBzyZchpeDTHTbBP7u8sbs4Rt5PaCdp9RQYTPPqFqheAQe8UBGTmPBHaWHf83JNyTeDkRDzkvgr6Jp78",
  "key29": "5Uo1UaMpo77FnmiLMoM3iN2rxnpbTm1hAQjNJU5fryzrehk8fHPERC9e3jH3asN7S2KPhtw4FducdYHkJzgqKPgJ",
  "key30": "pztTjeoDLs197gzekuLNuw19U37u4HLkebQjEZUbYq65Q4LvGmutdLBBT9f7sZfzeDNWUeqfJBtqqo48UsKzi8X",
  "key31": "2EFSEqn2ExCZcGBqzdTJbY3NFKsQzThEghj6gpEsQdokeu8TPu4NkepkBGm7VRFTMDWq2UPEtabzrKGusBezXFFa",
  "key32": "M4ZgtRuxtVKSsz9AVPU67hibevfFrriDWiG1BLzUtHqztD8iyfg8nRd77aoNTE4aSDEMZMX2i6Soajn5W5LFaQp",
  "key33": "TERPXSdZSPmQdX5nJAMWEf34LjVEvAUrgHcYdmugGRfm21qc83AgQ5UscR3TsUUqBxumNkmy96EXqXHu69kjKxC",
  "key34": "K9zQHrTTmmdx9jNUb7nYErkbKvDKPKLnAPdbjTsrebu2DSNhvH2CwThywiCW1zgrka7yqbLig4g3bWhufPn261b",
  "key35": "22FwG173xWmNRPxKaZKN5TPtXAwrjCgtDHKGNFKGNPWUP7TtxY9cYRnZZ5PWjnR7qPLcWkkfCcWgUe8RQ6njt45Q",
  "key36": "kLU9Bera2zS9Uhyw1xXXHYtwBJ5jwMrHoLC1ok959JHU2DPT83J7dhiqHEV6cJEs13g7ADmC6zbLem8drgiZyHd",
  "key37": "66FCdbacAoL9sh3dYoqet43hKwUHNBFsb4GqhV831c2y9E9Vq39cCFuJ4TMqCWGkqHvDiwDgzoiRMKfkftd6Sf73",
  "key38": "az1RqZ6mHT4uL4SL7BgvxMEwbgvd3MkAhVZrH9EkvrWkTAChSBP25WZ39vo1UP3bmkP27m5X9gTCtfYHttQeeia",
  "key39": "3dbrV9xYiS4vB2L7praJk92peFYw1XKJxBJErgaLvH3Ea8VyL2vaJoRd2drQ4xJxZFgWMeShmxWoqGAtgA41X7Ce",
  "key40": "5UfppEvNs3N5z1BeFpoBxpPjoWFzj7ogSfHhXQbJ8QB5bnGpksRtN2gj2Me5CkS4N3BAAvZV6hHhgwUkM55ym9sx",
  "key41": "3pmfqoLL645bmg7ufW7LvBdErT2KH94zom791omSJ8Kobx13qffx713MqphKvPqeEkedgmaKiquzi3taAsxdA43j",
  "key42": "4TJbkuQoTX1TWDQSxy1cbdS6moCnEkhVwnPmYuqkLaHsoXCNtStLyjAjwBHBUAEKFsBdDacmdU35C2YyUbnW5LSp",
  "key43": "516LsNBCEm9BTjZJA1rPkeRKQKBmrwW5YUP4b5iBzzzgUBksfmtEeVs7VHQJqgiQ9bR7aWGgkBDgk9KdEd1zLWFB",
  "key44": "ekpCmfSQUBNSuVhchrGuRnvVk3xmYgeYVJ1SK5WY2Eec9iSXRyRKAJu1EKVzef1AUZ8bktDPdf8rDGdsAXAJNtD",
  "key45": "2QiSnW6FuL1Xkj8zhQLLrxssUAfuecz7dgQaY57bGNqxkfp3tuq56sTd1whsPzREW8u9Rvu5QFBz4YSoXdhnioAf",
  "key46": "2Uw9orDrMN8RYDczXwepxzUSNzjBh9t2VFbtsGnkQLVuUUHGYruqK87td56PRip4ZEFUZTUKjfRaeZVJkdQuWkjJ",
  "key47": "61SSVNeimBFZqgQHk1vouKxAvvs82VYZDmAos5kcNcdEwakXR6LCbo9oUJPEouF5jgJZgaMa4B4BLSypj7EAg51c"
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
