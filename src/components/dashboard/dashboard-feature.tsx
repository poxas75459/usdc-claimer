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
    "2ThKMBeDUV8zLe2Qpyy5CYdg7wzjhHZoqAdrwykRHuBEMMBjytva1N9bVd6NPHLNDneqbYER1fwYMyYAFkZGcr9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "S5b1JUaFgHdWTbtX7Xh7Et89eNfHZnyyxgGAFnwowwu9F7LgS7yLpSRVV6KywWPS9tvm6oA5KvhFQjRn7Wdx1eK",
  "key1": "3vBCbABri5nfi54qbCRfen8BiNKee1B7XPKz5cJP9vfYz5ANzvSv1rf4M5gbCZ2hoEJWgeFqjjhYapu65zsbvwHA",
  "key2": "4bc4BvDL8K9NFVRpaaAriLs42eBRieKZSGVCLFHkhvC3FABVoeUW426SVjASzGowoPrjcMspsHfNpDDzVhC25hiQ",
  "key3": "4hk3f1jkmkBhCo8WeAQZWcZVgqM6hRLE3QDuD9ZTUo7DeMukbn75nKhL4i8dYN7MZqmu7NXLcwDW9RckNgJJFGJ5",
  "key4": "gm7c662baBeFdDi5ir5a9iuRBJX8dPzZ2PKBa5x4u1yGQ6a4Briw2HfjyorxKmWWeNYWsVpBkVzN4puvYBtCLVz",
  "key5": "5wFhAYfWQpZFgGNHQxPQYZnzWk5P3TcVPiGCywG6WtswhBgGuqR919w19G4RBx6PtwR3Dh7rvTt3AtW51wvCGCPV",
  "key6": "5kjTK2vbZK7GniuHgVEUH9AjRNx6s8djP36XWYuqESqYpvki6yAqJPgP1mm1dsXQuapKsbe6aeafExaCVJ5KHWoZ",
  "key7": "J3KfJtExyDxryYrAZs1aX3BLN6TZCsPHx5JWjgrcSKGWCyHX1zBYJHmH67TzS7dLGXwZMyNomYo8gCTELBDEGGP",
  "key8": "3nYc9D77ZKo4AcBEtngR13GyhfCae2toxE8T8vPnRTsoBFFHHCn7qysivZ8uux7ws5AYVFurJmozTjLDPEGuBc51",
  "key9": "5BqTAFQiKbRuoGBT3ufGSCdktyZJPTvWKrV6yV9D8y5YJCinS3bU8r33ogGJPATFoW9gsLdvgpbhoNNCERmwV2bp",
  "key10": "quPnWRibTJaC55bnrjdaR53nyVisQ4gSRFAeZeBNJQoWUkLAZ4hxBZh27ESYssVuz65PMARNg8XVTQjCUUZgSwF",
  "key11": "2o7JVNcSdWmerM7GEgyMxQay7ZsggPQoArsa9hHJsCnacRrtYXJRoxynPyAdXeHC5EtzZEdbtUHgk7kUt2fky1k5",
  "key12": "4kMRuTRTRirJ3ebgbQmVGXR6CzGyMyJwyVSu9V6sJSGg9wxncEydXtbknaGjD2TPYDmfno2YxngsSsSEUQEv8bPT",
  "key13": "5jLZEaF8XBAVZi6D5whvioztb5bNziULXMaZ7ZktCxDJvML9byV6RboMdaYGMMnWU6zopyLYDhsoZQfpZvnbFNjc",
  "key14": "4G3cP5XHkKhj42Yhwu45QdmNQzejVMbNQsUiY2D8SyM1Ef69gq3fNrXKdvJZe4pdfejbqYTUtk6qwMytv8W6u6vZ",
  "key15": "4MMmFeyqS4vcWXtWBPkxjQxfui5YFo1exm1AxR7ZhcwsMZXy9tQc2Xai3y1xt8MG4aG3KkU57ARqiDCwnkKRALLt",
  "key16": "4ntJUGumNTRzDXmBewMmf2p2ChS1Rhhazr4oTyWdmXkDFdeutAfkwpJd8Hex3JTdH8nvBH9QbEqdtVdUUbrK4PLS",
  "key17": "2ZeeuxTa1m9VPmc5KQUHUfp6WiqkSF3tZuTnjFHSXkqbqQkayEU96d1TRDgykDJbg8ZBiK79ecGCi4yCQBaWMaUj",
  "key18": "4xLZMyosgYdGF5361p8bQJHnx9MD1U4QhjDdMzL9K63L8PwfcFyJKLWL3YC792n78akXzoEbLXhf8DBeb5gWxfhw",
  "key19": "5KUSteVYuxq4KjWyAUUu1gbEdhfwK6Aia68Zrfun2AG11iRBrJS6aREJi4GGGz6fdC1HWeyVhyqAAVTgznZFB11M",
  "key20": "57M91nEBRtNMNNBquSBRrCSw9yfzdN2x5zAw8ZngR8uWuVcBkBYqT3Tq4bCX5qgQ4zRYenwAX6HDiiRTn5hBCkFX",
  "key21": "2b24XxhhqY25wJR96hjHsrKMoUhgeMqCAHZFSyEbZPYAtTkLCdRT4awUE5RwuofcR6ZrAdmcBbDSR94yEqgjKW9U",
  "key22": "5zpZf9272MinvJcxZJWhZBTJfsiKXwNoBP9dbTde3Tq8tcK51C3xePkiXf9jSLEdakvxthvJqcMjhEr4PB2cuDmx",
  "key23": "2GyUdWNM1Tw2WNaQfPVhF2ZoL81MNM4o4Erm2c4oCenhFyvDb1ZwCix5zNir8As7Z6QjgrHYhuRsCh8LyyaEmeUj",
  "key24": "5kc2Po2ebmHdasAjhtvazmqEcuvu5gZREHgqzn4pw8qM4XDWBhG9MGbTeHpxDhRRxsCGjxeF7xeb6fxo7b2Q3qXP",
  "key25": "5w22ABauuiyEfi3Uijb8JLadE5nnxmP3U2UuomkALAMLQEHJNqrRcjYNRxM3cDmkECfSaxqgX1MfBXk1qbFTfDc6",
  "key26": "4erpcxnqE9uszo96F3ksWjhNXw4oVC4rD6caek2RQtTQv26ZPx25rMahkjBV2VSMzBQWWAfgt47AwNg6VekwJHxs",
  "key27": "vXJg5bB17tZNBq5pPHiWEi9oh8jWCjwXv32haDo3uWGZrZBhNgzToEiWWkC1SYaK6Rv96oZ9hVFPtYaQU9WRVX3",
  "key28": "5EgAxeGkNa6u3n1MdaUC5iKt9t6tp23YmQQhbcJhLSCzxBc4x8gsABFw2eqFwR5Y6vs2hKmTttZKReZoe6x9jaa6",
  "key29": "4RuDnwyHvsQ9VBewt6Tppd2PdfEPKwUtidZfujnj8aqchjcoVmHPWLzwD7L18pZAjE4tJQwhzrE4J4a6oSYwpkkC",
  "key30": "5cppCAqAFutQ17C3DDvk76gWDMaJxwoca6Rbc6xUcfFGtAUwgVPUHgkymY62ytjP2qaSQZ1neEqRB1UA8yzVWzzP",
  "key31": "2L8MoK2NvK1M2KynmvdV5SUr7hBtYkWf5i14ZB3rTP7BBRiJCukUS6ovgbbH3AXec3GzgE7NweHWL1uvpWYHsU6k",
  "key32": "TX4Kd1MvHUudYF5t6HZn1LjGJ28tWqTqrMwCuZpmN8RZ5z6zipLdqTuWd9LXYdxS77F3uj31pvC9NgFCJWF39TW",
  "key33": "2LEytK8SAX11yeTA1EsjizxfMtoRETREWt18S8y8xVuRrgQoe8cUhXXgDHhawiFPzvY5nkcrcCyRHxLhEEPYxTAF",
  "key34": "5GUVxybhLCTQttLxMDxEc1NQw5DmwW3kXUPUHEDphwyVWhne71Lfa3oTWvNpzMHovNjqvBWgtjMQkx5TJC66BKAp",
  "key35": "2SnYMah8rEcbYi2ZG9yaNK2v9orQJU8eehzBTPyb49rHDmSLjXMLCRWVJPPp4qLfc7UChH4R2wEJXodpNeNDbVXH",
  "key36": "4PZBfNDXJVM7PPEH2uhZhm1C4x7nSu8eo9n1bHiJPpmxXGU5FCYxpnq4Ws4SG6j4RqxBeTw4a3vkXqBbcUTFwvnD",
  "key37": "3nHcwJgsa9277SuyYTAE3AgpmHYYdx3zU2cXNRUKYX1q122fpKTTsbDwDMVescfTrs7UDNDEHqEZM5RCiemcq8Bk",
  "key38": "4B4KqPt11wnbuhSwGEMC3kkYAZXxWgG5vyXMicbDoksZbG9xVVnvZT1zkJjLPDfcvwwBUpa9aMEdSCNUrTwh6zy",
  "key39": "5mU6fi1Kt5SCYExCp6BsuR1hPkiUo9XCjihLk7QDzPNxoaeXwWWSMeMpHgAJMiB71s1RZ6eHcx7zNwqP9FWgRGt2",
  "key40": "4gR3iuTnBemMimYMZvczZZxw33iQfcgenB2bPqMYuQneK3oZdz5j8uCpr2KMcCCjPyWqdzBwyt27ck3EFUxmeufN",
  "key41": "2X5vH5gVA8hEsZBKhNG7Qp1Q5sBKFkeHrgsFVLL47bLN3RQ4AH7aYcFSxPAZsQsYrDBHpVptvDJQc48DQCD6eiKA"
};
// KEYS_END


// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2aAg4HFiYwjFqa3s9dD9NkMGuoQR4xqucaGHt3GXygyQerzQyqzhdVimUfLadTpyG4dBrXw5dbKJzMdmagrpNeCZ",
  "decoyKey1": "2qGYYggnqP7xuvpSjheeH7d8xnqA6chDZtJ3Wut8y82Q9Sda7aVnFjbVoWMqK2bJWSHX5mK1uS6P3LU2zKmnyjx6",
  "decoyKey2": "FSiZdDYUhMio4SE29pkwvGXswwnp1pr8vuVZNyQm3QqCNiyTFsaWT4qTUaPnxvHUwaD2h8CC8GetwTdG1VPSthc",
  "decoyKey3": "xE6pcTuBSR2pxrXiNQLKZkAZs68BHV5mjuphbgmqTe9bwxGiSV8SHBeRZ4Zp1ZNkZmA4WHfzX22hWbLwesnhL7n",
  "decoyKey4": "5VgukLU3zcHC2AYnp9yQiWx3cMp4hApu1pzJkUa79mpPYP1cQAbB4g7zxwi9jeZLLskmXSF61wWFYKPVs5EnuYSB",
  "decoyKey5": "4UMcboXyebWhQBDiXAtmSFi3ZTbMRmvxxLTrdVzxrAxxBsRoREntXjc4j3pSGgiqJEnUgPaCR6RvxEtimXYEgsj1",
  "decoyKey6": "3Ca5yChXK92kAr7E26Fsr4QLccdYJsGk5jbtKw5ZH7zEwogZADjnZ2brVgvCVfLQhTqeMHXTRD4Tqgqv4u9WvyKn",
  "decoyKey7": "4ypDUkcGFK8tqQ9DQTNwgaAHuLYS9wg69MzoNstDmwwmWGPj92doPSo4rQfRE5xC1JLfFmDHCYyENd24PTSAvhrn",
  "decoyKey8": "2pPwTcZDYe13QcX6YXCXh8VSKjxfQokZfa1GHz29QkUDbENUHeZanKjRJMPTYe9LuAW3eVJBCZ2KwPBHrH82gU4U",
  "decoyKey9": "iCEw5tsMKvyTpyppa7UuuMhX6EqjuKruQPp1JRfz3YHDz9qeZQFhAgkBXK5bTDoqKEU7c4xDY22RxnXHbrepJSa",
  "decoyKey10": "3kpzD6xejjqnAVjm8qTDaHa94WfWgeRmk2RTkMxcq51Z3DSfjw4U21KNTkNcjUjcnkyVqcC6rRyjbDbnjiUAQ4xE",
  "decoyKey11": "3GMNPhdcLtBaCY4V32dqcojEZKoJpmtnMP1afbKV2ZgU865aea4ZMmG4UyBhkHKpBnsQLPuVKUjjPtCtuDJ2A5wT",
  "decoyKey12": "3YuGvieH3XPjHxqhCgvNDcV7poLMp9Le5cLRo68bh59hHopDHfyMPV4YVahswPMofP8itQvaMTz6kNhS8Z8rhtfT",
  "decoyKey13": "2B4QRsx47HiQANtsqqsP76SgBFQtaK6GyMvsN7XofKfgcU4voP9GxtKEpsSqGBdRXC1RVEAPTUMigscgQzSHXk84",
  "decoyKey14": "3we7v2cdZiZNiyQnUCSEfPQ4ptsvg8oP6yrQyzxpf6W8sXwJ4psWA91NYWmWY8qATxHHAATEisJRwnicxwtPTtJg",
  "decoyKey15": "3n37j2bHPCiazD7Kk9AcAHJfnefArvMgTFAAwQywRC9KTE2kXnpy2SzWc8hwFfgcvzqSoEb5s7uczk8U9aG8eEoZ",
  "decoyKey16": "5fjzCnf2LmWLGFBbsMeSYgHU1zhthxBzsSNGw7h2b7hkK3TUsTEWgFjUq3miYB3Rxf61msnF7a5pDrARf4DBcqyH",
  "decoyKey17": "4tzTHRoXdyUsfMEnV6vuaq96EGXtkoQtFXJRMc5Q5XhjNkWehWA34fBRxhvZCCLHJaicdotLT6nrK9UFJB928VJ5",
  "decoyKey18": "2puaPP89ddZUcvcMLryucaAHTsyQ53pcfPxZEF3WVBkR8F3qmmojSEtPWoeTMvy9nz864UNBDhsPL5Md43FXGytV",
  "decoyKey19": "5sBZn53SDE8chBNUvn9r1Wm7rankUt4mKQ1iwvqfxykFm9Crye8VoE42m2pSaSEvLwWRTRQEbVaePj93uExY11iu",
  "decoyKey20": "2wPAjpwVJ4kofyPCAn9d6TsLindWzkmsQ6XX4rsPebjmhSeg1wpqLQqAVGcdtqBpGja6iNwoxEus3SSADiCXeoBy",
  "decoyKey21": "2vrexyFkMn2Df8z4HZBNZjXB1XnCLkDeTEKA5CE7f18gZfGqR2JPsLyatkM8zj9n4Y2NJoGX5wFaMyVhVopTXzsU",
  "decoyKey22": "2e7SoP8bFMdi4PgbuedJxr8s76mUz9XPi2KH72oCkYJWMndADmepjSt3hisPJexpBzKQ6JvFyxhZm5k3u1bs6FEx",
  "decoyKey23": "5ZjttGDPVmiva9GoDdpUQSE7Fvri2N82yEJh6vbhwT32aJb1YSEhcJWXBjJR4qEh1qp4kGw9Wofro94TduUVtHfo",
  "decoyKey24": "2XL6GV5ztmKSzBkhfQE8fZ2ukrMteaQXDP2ZjP1mbjDad6sTuC7vsGBsMhwKZArvUmUvLicHbQa5GrXCSgWxLYWg",
  "decoyKey25": "2ShAihv9aZhcgv9ikcckyhZzCHkKhgXmxLyvZbzQmJkVZWayVfPZw1KHP9jpoSL6o8acDDT2yyatbii7PTjTyszZ",
  "decoyKey26": "5C3vfNTkfgQzzbySJcif8UsvhsDRVNhKUFZEv7YwpK7MPeHnQf96xjnqECY57DqbvGaEBW7ea2z9TTZVZQGJD7nw",
  "decoyKey27": "2UyZocKhQ7ubhqCh7dmUtNeHXrDbSHupKX9Pn14uJbuemywzQB7uQ7xAQPwPJLYvnivg4sprYJ9EPmTTdcA8sdcw",
  "decoyKey28": "MVTWFrAifuhPueHLZvD6u5LunWjb7BXZ991qA3juYY4cteLsT2jY2ZBLVx8ACVwz3TnsvpYEkuuSRdbBwnNX2AW",
  "decoyKey29": "3oqyWPdqZwsT4MURSpGsvijsMz66Uzo15tEN4LyhM29a7txXkDVQQKdrkQ7VsJvaN2k44oCogmkLttkSxdNPg3o9",
  "decoyKey30": "4EQebb7cSRZ87Z8U1cSzRfTyfNMbTvz7A3Et7oSWZfhuHJfcnWt4GLoNzHZ74WJnh1PGuoYvvGeNk79Qm1vV2W9V",
  "decoyKey31": "5Efdga37hmvBLNzqM8GsnHDds6ogqmsvjnX2hfo3x8S7tzhWQNv9uHFfnSmiFroHBSaX7Eh1KCwmLnDvvsXhztca",
  "decoyKey32": "5sK8aTiVowqzsnbmMuZpT9CvDwAqHDANDUjL8saY3nnn4TyUqboj9KB7wCgoxwGT1RKaycuprs5HeK8YnvntafW",
  "decoyKey33": "4xqjiABeDTGbvUmrG6kWev1K2MsRfQC6whP6JKpFoD6xqsm2JHwaXi1asACJmP4RVUYrKcHtqmcJDxQwcwibFhJc",
  "decoyKey34": "r7xKV3KJ1c2NmieKehjAx5zGGEKVcn1LbiDV6SXT83NvMgNhzDbUyNrFmfKjjE56bHzE2nDPHMaMA99Wpv9UF1g",
  "decoyKey35": "4YVoqxpSPLtVvsJ3qRZxsDtVjpqqGbBf8GH9WCY2SBA5PLVWuh8oQVuXcJnT5a1j41kkrTLHZppJ1X15gwuq5KDq",
  "decoyKey36": "36WrmS9qsWfzvBXeYNSe7rqp2NfuaAQdsHVcsT4LxKGGLy7NdNpw3E86szUCuAoke9EyBer5dL3AZUw9XZbsGpd7",
  "decoyKey37": "4UQwrV5eEkc7DdGwbPsVD5xFZLiubFGEBbw9bWbimpEBzD5ac6obr37ej31TVXGyGshU9dukvZEtzxsHG1mp8Fkf",
  "decoyKey38": "3A97g2TPJe8R5b19QPqsE331n1tCABriCiYkCMDZ2ZqjCpeGXXrsxgxBQprzcM6NgTaYk3AsKmT7KgZHcKruYbEZ",
  "decoyKey39": "5bDptNBL46yioWMgz4iBfiVyoULu2v8BPUvE6pG2pQ2iY8x4CXnutHbKamhqgJJGmqufJiENuwn45CXK5X6EhqBZ"
};
// DECOY_KEYS_END
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