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
    "5cmd3TTyE1t1moJwstMAUhitcby9DsWDfinMEsdJUh8BkVZP7hAwM6SqbnjXj78mbGQTfTiZsudTxu62eCfbxkas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aHHyjP9rj65bEfMSgMkt3mUJweTmDfCvHYPjU6CkGURUo1Wto7K8D9Dv7evmGt5qB1Ghu41Fkj2eJRSVspfFsKk",
  "key1": "2pAsW9L3Es2HaEHcFqH6sUEKrgm2wKMX3adChaMvxGTWFW5Dvd5jEF4bMxcWFkpN5rvPyYgYYgViBZkVDMF18xfL",
  "key2": "32B6VfFuebbw1UuPPnKTHYszwZhThqBZZaLsf3cV4NtYJ7TW7DyHgUZVGp4VG3FnhLzDDS5fpc6Y7cWR4c1Eg4LK",
  "key3": "5h7ptymhMFSGip42qD5n4vNDHXgevpn36eKZnY1wAn17XfyfCAwfChPW7dGAXx17atTTPtYBCKS2RiS9aEGUTX2w",
  "key4": "4pT8chXPSmrUTYFTcd4xts6SZHV5njU2piWiQZQnjMNue3sTjqWnbLFVtHcYZoewiJDqgq24BJy5pJFdY6CHZLxJ",
  "key5": "58edNXkEPk4sNSz6zuT7PYJu6UjpnbLebGfj25AEa7QZDEfpQUDno4F5cFDdzPrCAWxgJPMCcfBGy4iH8gYSbhCs",
  "key6": "5jVxBKm4oERDcU6qjJJy3w9LnBcjKRTH82UeHna6Gy7VmyK22d2SyntwiCEZDpf6Wyj5XkNobsacnaG4gD7Goeqz",
  "key7": "47QUrPDaWHwBnJEL5d4Be5jnnaMCcgs7tDUwXWsVg5YLqYfVDJLRbrPkb5afeEn9LbEtVXtgNVhvmMQDM2qXCZ1t",
  "key8": "3i722PyBGhXQqUoSEgec9fwqN3WBSaty4oLuhgopzJynZQcz2z9btUK5iz4fHF9ZTB67GTmkrAVfiFndCd14MkkK",
  "key9": "5T1BepQVNQSo7R89o5KywJDHgm7MciBe8MKyFpEJ5UAEp2VcXZJ6yHrF72Wxh85oN9DgvL892QnmUmu9rfeonttC",
  "key10": "J2fGkyFfoHPugwuNGJKQr8LWYSY5atHi7m44QUu8zreE2dNeLQV2ihHaWzXXNr8SofLGQtnKhaDu76h8TGsdUwz",
  "key11": "5cM3qVA66yfz7B6ZGhdCeKZ9dgmLshj4qXWivCqPGcKbwC3Brc5Brf8FyvAm8UxsV7w3YCYzbY9VUq8uVgjjxttP",
  "key12": "4hZkZ6JoyAtHm1pdwsTSHqZGaSRMDpxqCvu7Wg3twNqvUuGCv2qw843hNEVzV1VvaVSnAzBa9c8eUW5Ezjqru2RG",
  "key13": "P97jGMD5dX9aant4SVdkobCQb6CvCuoueN7N8pZ9hU7Xj29Ra3PnAc5c1rUPBnybguVReh7Z1mcLMy3FLcvemeQ",
  "key14": "2a45Vwuh4cPpom8Hp4F74mhGk5FCcSMFPuRXMHNajYR3KRncSFR3Zzwetf7EijVBPQiTbjf2XUhZLMb1hzKmh8Wu",
  "key15": "4FiiUBfVDeMQDQ3SAmt4YYhL63nSC4hJRtmyPtYkoaYKmLo8Gj6V7yM3zDKKNvFA1LEhp5sVywH3ezJe7XUac3LG",
  "key16": "3NevoC3erbTf1UcZKzwEc47UMrBPV9BxiVG2CgjVoJCVe7Jm2i18M1cdERGXJ4xo2dYo1TBRZreSXV871hZ4KJbf",
  "key17": "5wxgV8mHsRUjN1teANQRmgB6nvHxenaf5sjxMCxvmVbELiQumoaVF9CXczcGjurQCW3Ye6HzxHdACj5anab9uZNN",
  "key18": "ZVVWwuwMcVW2Hot2cJ1XydHyqDvg2ucS3fcfZ73MowPG7CNjkvCZDevkRfyKNzXHug2PhWzZzUAgkJpkMLfrS6Y",
  "key19": "5Pg6xNsXg9jjaVUAa9o5gExbu4hokBoRdxK6ZY3oiuyUzFRFiZjwqT3RneM52dmDSBA5T3gPTLmdTXohwKQSbVBh",
  "key20": "5Tr4qb4H9zqD5e2Kr3cP4Q5x1hRBA3onxKe3eKRFuuj5y7xSw68MsuPj6585KZLnMk5nu1egXHaqaxoyvg9z7Cd",
  "key21": "NWNiFfroXAaqrtwRZNL8CnbHwc96QY7Sw8Nt1EBMGUVtwXXrZjSLGD3d9tzSBxpEQddrwWva4ChXLy46HFZkvcQ",
  "key22": "o6zDS8kREjragy3vCEW41Wd657Taa2Eztq8ob2tJyYXQfjfWeMJDLKrf5wwgEzsTBvsUwHRB544W4ZtDUJTJzbc",
  "key23": "zPDgHRnzutpfVv9b2JYs5ZCKxDiuPQQmqZiijDvsf7kbCJwveLbhi881Lgy4CPCFaEdVmyyeUoWvzonMXo2sZrZ",
  "key24": "GtAmp28BR9NfB24j2GkPQoybfiKjJvkoHGRtn3yaUe7k1odMLEYGNhWxAVSZqSv63eTq8JtC5JripMmxqeZGfHu",
  "key25": "3r4qQFkeRqSw8ogg2Dss9tSaySCDekMkKX1GSmJmQpKySqW1xMpy9URsQCtJ8pbNvk9JX2hd2D28RfDe19VaycuS",
  "key26": "Y25QeGN7NUSpG19dnukuqumjuTx6fcqxtpfhTQwh2Ksib7KP1XgGqXDaoTzA1G9N4mCEDmK17kbttQbB25qDiu2",
  "key27": "3bNmexnWs3gpgHBT4iBKoU9VbpywfW3eA1AEAg6sQUfVV2uNh7yHqq5P2dByUi82Wc88RHMFaofTWN7QHFeMVcL8"
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