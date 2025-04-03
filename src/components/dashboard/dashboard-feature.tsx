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
    "hxboHknmfv78suSwCo8A6imXoX4Sq7KfgJdyT6aUi8cr8B7WVW6ArnS2uMg5ggatUYzUZKNikDr6ZJ7oaPybTVc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LQxHoMqaFsNdUuZoKErythxWbf9objsAzH3rkxrm7kpDsVmBic7R9E92o4RKBL8E2LSTT3aw6bAuh7rS6SoaPUn",
  "key1": "3zP5svFSEKHtU8qKVyZLJ1FRrpGUwai7fJ2RxseNqtCAqVfhBAJBkEPiLoxNQ61gGeoyPXjGiKKPPgrGGAHfFyih",
  "key2": "2qT4XFxus89fkhcHH5sqR2C3Eparn5MXnq2XUV35i4fn1sKZRkxvKJSVjjGRppZ2a389577w2pSo4Tgv2Y6VESu3",
  "key3": "2inhpJpVQ5rswkgaWP7HFpckZfNdo8Tge977v9K8GkYCtNp1WaPfGyS6SCVqe94y1SP9xCwjnhhcvzP9bzSveZem",
  "key4": "bQAePYDwRrBRhzm2KhB4viLAscFGBnfswiXbnq3rzDU7m9J1CUCA3XcARcg8nkz2DBYHZ7UUZ4LPMjoPdKekfCG",
  "key5": "59j7Ng1x5QSFgNeJoJMmoXsRvG3RtFotKP86gLiYt1yN3fyxjSFEJYPwMvVv6JX86xxipYhvrbuFaRbiw7HrSuWz",
  "key6": "5z14f2HHA9HKBwjXnDembbDcyUt9y7BeuLxD8FV7Fb4hJNPpvGBvaq9uc5EuEujg9Rm2s5iH8V2mxEuXzNMBZpRU",
  "key7": "5yAQTrGX2Xt3nb2sEBLJrjwGhxxTuPLjENHRa6o1f8YQF9A6oFXKgznwa8Kd4xNba4vXic33nn1JKVvJAkC5Esqy",
  "key8": "YMvxTcgua1oN9vXaLfpt63uDiSS4fo5H4R2SUPbNuXrnBqjVZxdhV7eqtGG4XyYziNe2NfjDJoWXz2Q39F1TNgP",
  "key9": "3UwC352WivUkSMQUk3etr4Zywemufyx4DGzJEQm29oDezkKmpjNCfw5kzWi83BLb26e2Vy8oTVfuZHeCnjVcpV9s",
  "key10": "4Vbx2iJy2hZQW9aDuQ4psT9j99Q82yaSabUGRKVmbNz2rNuTYAihxAPihRLKRZw5Ea8axoGwndfwQgMykNvtoDhV",
  "key11": "5HWPcAgz3nRToG1E1Du8csfaJpaKWWV9eNcSpavLgV1s5pvFFEJPX7u43HKgUAvwpccsDuLDB9fcfK21bBPTcRxJ",
  "key12": "57NyTbjSr24Tc3NkwkzMzhiM2Zvnq6TTt6dqVAMmfHDwRojevgcDozGCy3uVAN24bLgDygWW92EG2pfa9WtSziay",
  "key13": "5o3X8dfNnc3ctW5aHutETT7XHnQsupDUrXjBQgbgnHpBjcbsJ7S4sSvM8MYUGeXrhx7wDTcatZsc9LEZZHY2dEw6",
  "key14": "4Busd8z1jnQxkSKw1WqMhu7pbH7QJ3g4isKeVNGVA9743qMMc4S5CRgKFdM8pYhZjzH7PcVhfD1C8osbbcr7vySV",
  "key15": "2kHghRixRDuj9PyVJc4roWAUt88bSEvmbtHNjegU5ghk1TdjUnv5UugwA5UqCoNxUXYXymZZzAhtamzGG5bgstoN",
  "key16": "pyzdR1UV992LuGHWuZ4RXKYRXZKwFKv6agYDKAtzn3Guf8TZciD9DXgu9jFNGcVZ1iJQ6PZzcvWzWATzJjJhhQz",
  "key17": "sr1H4ChNEL92MkMHAnLfopKuNQtEMD3sHggZ12kuJzvGX9T1zKmXTnWAiUHfo7fVXNKhxttoV4eeUWLn9ouwxvf",
  "key18": "2L8fNACnNygtL33igTZhadF29F2271kv3uMGotrjDi4jw6aKjmdrCL5g8gGL6DEExAXCT6dYkTREkmbtE8URffVS",
  "key19": "5CS1SzwSFdDGJBD7WnuTig4ZfUruv9dNHqnfBYMVXoCKwhimkM28sq9CAiRDVZ82vvSeXTeB4Mk1gmdPCduc4akj",
  "key20": "4c6DyKkv95qvqND1R6HcRv5rm4WBExbuWQyGr3t7ji6BegZvpERGzU8eZnYH4Had5QTxPHd9qJH3qM6jsbUNVPX7",
  "key21": "4DEPWUVL89mw3WSu6aYdqFQh3sMuJCbXpbsoDbbkPsebW7gpSEz1JmePSwKAuCKcT1h9H4mf6KP383tSxt4vWVpL",
  "key22": "5Smejpe5jbSTWv1iVrxi6AU72pUNSZAWZZUAcxSrstBJPkaN4z2G2c1rTUjcNgZ8etZSF4E5CzZDdteg6HYuzza4",
  "key23": "df7Ja1fAeT6gF6Yqms8re7g3rfKyj3P67NvpaTdFxCdPNn5cayWwWFVsPk1gjWuFhRNyVQFnWbKJqi9CUMJ4MWP",
  "key24": "j2FaLgX2ohttkpQLpGY4dHY8Bww7NsMJmJ9z8GKckQuSkHPPnqFUpa9iHU3egqeg8m6BtdcqoPSXHS4rVuiqsDX",
  "key25": "2AUG8ctqb2hhb1HSdEQpnk6VqQPrkRDCr3GWTmEgAMTU2Y3EPSGWzRjeMVEtzxTeUAuzw5jGMAP462nyqKo6A3aH",
  "key26": "3gZM9JPqJnvhm1gEnGcHhwxBqGdLgbWkaBUaq6jMEEZ73SUvCteHpC3qrNAAFrcM6NZvQx3WA7LWTveb5qJSb2wi",
  "key27": "4eEf4DyADsE2nxAQoMBSqbWxYrMDfML7LB1bHcWz4gtr1cboNRsdCcAJkhAhPFoPeBymM9PRgaMLTvisrBfhFCPk",
  "key28": "52qHYWEDrAg2wUMzV1nuXawUf3feWj3rBX7t15atSjkTGyPJz9AYnHFQdk9EcfDqF8wgxcL36uEA1jkjgeRrSYGW",
  "key29": "56iK4P3BnDJLtooXf2CYd3gWrvq5oSGSGVNPB5rMqnUKTyQPd6SFJTaBS84UxCAvE3M7bRh4vr9WgsrmgoXeEpw5",
  "key30": "5oA4e7fwCN6XZQnNAsNLvEsEjsbLcMjAqhTmgaqtRL56pfeyNNm4Yj3uwr4SdyFJELANP7MQ2aBPKdxWDL9zLXUx",
  "key31": "6DxyGB7TPyn1bv6JtUerBFw8qFZ62rCRhb1gDk3SKvoEeYAqNa8xNADjXgiaA26VcsZPJpTzU64A8VH4FaEuuA3",
  "key32": "2tUioCTK6QVkqiChm5tiqQP1RhGTiZgrGYxFFYBNUZQQ9dL9uLErmDV2TrhNQ53krAGpiiENNoy2d2CiAgwWXjoJ",
  "key33": "22PLiSWaigCePndsoKnU2MJaSYssKmMnAWCG2i3T5Eb6gw9AHQKAuoqvCp72wBVpU7jWbocR71z26RwkbvNHzYNS",
  "key34": "2p6yhtXgeGtyNxzCdT1zh9FJLktX1yzi1UdRkub1n72GQjCyS48xtuXsN93RM48ZoasnY6tPnWzc8a6dKDnPEMQS",
  "key35": "2T9jsnJrz81qaNmXLubQtpEprsT86PSVToPWMn3ZJD15vvwdoiFKxY68ZvvVXYdi2HWMZFK3G22KEdL78zE9Wyyg",
  "key36": "Tcr4xtMN6cqzitz5vrbgE2uGumNdXp3TjrtQ18GtQbdNHJzdLPFj7dZi1kvgJLMpNTvfxq3PS2D24jzCQdFhmbe",
  "key37": "23By535niDBVVz68W8thYhbh4pkhm3qDWopqjLAiYZd3yeYvNeGazSYFEGLP7joEF1Ch7o8SKbXx6yzbqz8onmwF",
  "key38": "nbUYBNJHYdroBSon8P2WC3XhDVwTPzsxyuXNkT2GJtL9sowYPjmbxw2jtxxGcbFNbi59DimrQ3N6c2Dg4AaZiSt",
  "key39": "66qnJQPVLdm1ojKuAcZVqzikoBHoRarvZNJ5i1kDSuFSoFsiYqHookBGEQU9ByH8nC1VoLTMo3PA2rToxkWEod9u",
  "key40": "3fpmZuWigqizm42u2PzhWEzRaaMoM8mWokFMAjD5qSza5AkZjqxpncDxVH2CJoNhgJUBexkT3q3Tixq4WjNZaqBX",
  "key41": "vW9TjCPvYooFcqMcdtpWr7874yqP3Z6n374VAjjz3sF7HbYxvg8JiTUEuJqXFPne2wtK8ndGkAM5rt2GhX6QZ1z",
  "key42": "4vB8PcYz8RQ9rsV2qKNJbTBwXdCh2x8Sj38YmXE44cuH8jzGUcWsb7beADjMHkigVJSFkMUFthEXpozQoBtnJXtW",
  "key43": "5raaJKk6dUgrL5zP7CXmVUTzya9rxSZorizgVnas8ND8ZFACyzi7NruaE78F6gC3QxpjG44Enh9fBDrjquyXV6Ck",
  "key44": "2siFbrQdqCBfsYcUzrsQa6BQR13E2caNTr4vbujNyecSsFoeUy3Si31qynduDDywavQDkw61vsKCg9PPNJhXYDGe",
  "key45": "4FwqV6GRGcWT6h9A95HKaJnNgkGzoPwzg4AWz8xApggSWEo6L25xNp8EiAn5ivpC38S8xAL6eL3Wscq2fs7muXF5",
  "key46": "HXLHtKp382KinbixHJJCY5NRSxaBodE4jrcqduvwVR4jJspRVtKrkDstwXqcTJ7G5pmC688R185YE1Vw6iGDS8n",
  "key47": "3sazWNCtb9q4hT4UB8aqpD2AU7WACkJX5e37VqzaanuHWdd9uhBrP22fAr2VBNhcbcEAwekeGD1qQPuBt7EXqkZd"
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
