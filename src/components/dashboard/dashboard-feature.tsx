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
    "5i9CKZhcuQKxmEjw9gsbQSaPNhCdq5J78rXmdDtW3LdYo8kZwyGPDBzV2gYgBqSp7UTR1yVxrb5bmYr5y4r8UqnY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XbdnqkAgKeGDfCggwZM9SbsgvMbKPq4MC5ELgGT6d5FMbZ2XpGcEXWotpMbFo71ftwRuwGXc1nrRBkBMNfkiaeA",
  "key1": "4xUkWYaaAXDKyU66QDgSCma2DNwhBejhzbUHcyJWq9eKtv8hY7k4KbtxKRGTH2bxzcXk5mTitucuKzmiaJPQeQvx",
  "key2": "3QQnVpBH8VwKKmT2FvwGVnsuAE8pgcy6W5uow3wLK8Ydk6ynmK7aVEGSBy67Qb5TMUkyKyMtBPPMgRX19WT8wsB4",
  "key3": "623Bbn8ErGLxKu5pRor6qTE2JvCXVEd1VisDwp2iES9f5enUapdKSk5644NGPEbbDzHRsbS6NY62VYCtHzW33Yu6",
  "key4": "5PUcTyDFdbvtnJnhKhaGJugNuu8fCRbqfRApDr2baiRnNjXGskUGRHbRmtjcV9PBdRktMCpijZhPtDoUgqUkwipb",
  "key5": "24kML7bNYfzSrg9uga447m791fojT1CFe29WCKkKSQGCMMNVDrvk4w7K238noBEa73UgWsgvjyqSYTCXM9Tor1St",
  "key6": "4NULdD7UqfLiRjaeTQUZ1nUwyx5JE9tf7aPGXcaGsz96nYCVfDt5SqrBFqxvkNEvpSaJoL87ArmoxMaJFPZytA22",
  "key7": "v7B436p6mf2JNfeQXHrTCHivb9Pq52bAqFE6B9Rzh2mhZAXQ7qVqsx5eEgxActqGu73mjwbxcS4i8fMZaeq6XDd",
  "key8": "558iVPrT1uqTUGEovUmTjwbSxDzvSYymg8TngKh6YG74QVFfK1u5GErrkGqywf7y2r6TbadtUPYqefYhcY3uz7fe",
  "key9": "32yTXjNEcRK9n8P1LY7fXvezpUCvFFhSkVeK4nGMfqtoo7GKcrcDQ6JYjuQYqnVzJiV6ZVKcyXkminPzYkgVvrBE",
  "key10": "jMZeirzSwSwDvBMA4gNUGppqtmK2dmmh3TQ8nxzzr7UDrj7FesvNKciP3gaMhkBaSUAR7NWci2F2ZeQ7m1pu3rT",
  "key11": "2zhHPXiJAdLeNUYx53xUtA5jjgvpJNcBGkRmFmVhuRsmp1PgGZr8MxfgNGL7XwCMstEPY7tbZxDuSCnPhgYwvKjf",
  "key12": "57PXUWrnMovsT9ShD6kzTo8C5gvNVubd7LDQnVgHiiQdkkjnqVWmrGvvrJk2C7RD6iXSvu434u8wTqdPipcB9k7c",
  "key13": "4rxSmDRcwpGQDobGxD26QJZo8zVK1bZrc8r1AZWh3QjWHn9tJ59fzessjeoinRY6DfG6KK7VWtfUfFqYdavVwC12",
  "key14": "2eg1QuJp5or53Dv8hBq6qe5aeofJwmVzEUSo6mkweaHFtk1VmD9or5UiW4JwduGYduSrZPe5gREEem5cFxbKyofG",
  "key15": "Nk5jgKUfj6SsHHxhcFUPjjYuTueMFw5zRnXg7ehgouFfrVz5BNh7xRyqx4udXhWPwMxKcRUMKAFSXtQQcySYK1e",
  "key16": "3MC1zKELuLJyHbwrpznavWTEZjCoQQcpWpEZtJpYLQixegiLVmyDq5umSk5FHaVw8P85D26z24LKkTsbD8arZt2t",
  "key17": "4tUj8H8nSHpBRbH7HM8FReAQpdRRmeskDWhaSmXU2xqsk7CD13GDzFLh2RTJs3mK55RPiaJnJzQb4j82niyHZFSu",
  "key18": "3oS7QRU8t7GBGoWtcrjvFCZC3Ea2kxP12gXB3Wh2mebLsfFa76bBDQpebfiLU1Bm6sZ1wZ5zYne8NmXrnXXCCa3s",
  "key19": "3uYsQBUcUFVVzv8xd4d4bN7GMvS8g6KEqy1fJaFzeDGMZDPitpiTiN4SzDZNs2rFrdrfke7HJB6RkFE8CA4k8No3",
  "key20": "5BNUPatyNUaSURqrHvZ8KJYQSaGL6FrJxdwWVKbx7CQVFozb35a42LwL7dVyLcZkfnJRZSDM5AYRCyP5Y2M5iZDC",
  "key21": "3xdRSQAE5ibSX9yscA4gnuFAYj4z521mpW87kLC38T23QPSLLRpSTna68DcKq5Lo4s7u5YQ6TJzeHnKU6VnkmWRq",
  "key22": "5iEC5Q4HYjvmVcGbtCUFhgoNtkw7RRwg5zvkmSqJov4jpqWjRnxe8eWWQjheoUh3T3pkdSyAgv1cpXzPwZja655t",
  "key23": "4AGek4FxBW9JZuAeFknSyxKyPY4GteshZWeVDj5RkgvmM9jkFHFTdgaZTe4tXRR9xuEBCiKNfTP3D1KTxfqQya9F",
  "key24": "32BMTDwyfNeMRv6BuWs4TippPGFwTGPDgupQYeAGg5X1Eb1jtzdMJz5YEAjT7q4eoVbeVMvkgk1cYB2puwUPgAUy",
  "key25": "4XiqjY9hM8YEW9giUUvdoJXtfiLnYsn7FpJMKz3RLEw1Zn4xLPqAmeH4xjSK2zAvtixt2jinY4a16Hws3PFS3UsE",
  "key26": "5nyJdUnhixPDWjVTugq2RHm8sXTE3GLXDHWi9e1aU5Aw8umKLEAfLn7wJnkHLRF6GS2H2pmeqxPpzye45pWZwCfi",
  "key27": "2rvbJ4k1SSRQe6PiWfmXLNza7WVVY95vhMj23qKVw3ZbJqRiwAyhDHwgECZSot4bvu3UAq4uQcXsfR6t52HSv6X2",
  "key28": "NWqLqtAWCPVjfxmcjS1eCqYSMQhK2mdFvMNoWeG6oUxdo6jtCcwPwdk4bwpEXkuLHKTMA46GJDVmGfSeFnijBrA",
  "key29": "4VEF8YtzaR4TrN2SCastWvgrDd1nn12dYUv4JKM2XmsEuKJBqELqRrtJajYonbUSC13BKTUZE61qZYuaodDkRtyF",
  "key30": "26tCeNk48zCPFfvE2BzE1pQ6qAGQAhqQEgieUhF7xMGQqfUH1npdV5CUCic8cofrVn9yurfbfrY7puNFwdb9gdML",
  "key31": "DJYX4rws2XQEfV4f4j2kNtPKYgrM5zvHb21Pjsn5RaiSs85MtMXpLe9MSgYs3htA2gvHriniAHpddA9LwamRFJY",
  "key32": "3tSSUUUA5Mun9dPmbLs4VDybavoTC5AB3f3cYo7Gg1L9QahSy8sn6rTkE5mQU4FbLubFHFcZGDRYqYSAyd6Kz9uH",
  "key33": "3M7Su2M4ct22LJeADBxHaUoT8WEnFh8gVnad581CWSTMq1wRf9WCUZVk9Hbgf7siM4vkte6C5nfJzW2nBVQHsGhf",
  "key34": "2Aa8FjUJ13XSBEndcSHfqTkn6NAhadRvkYikpaUqvJDNCb9sXFjQ9MCqrRjmqo2pkLxCQMkQMoeqnXyQpSpeJMVm",
  "key35": "3m3ePBK19SJPjpYu3bi4JexRYDipR2SRmaLV6M8UiaTebdx95i1iYxEFpD8dgRUungG3XGDYhMKTMEEvZY9JvkS6",
  "key36": "6zpVuVnWF4ebGeN3E778Vx6u5CicQsj1zyTsAHC4T9ssJkkyeEavXsztnycempGx3539H3LJc2V9VhCbYFL11Rw",
  "key37": "4k8RK3d7cAZCZq6UdddD4w6DAVvD9oojMxDe1trdCcDBEVfnNTNMuPZTueCckwKsPsdJYapmdXqz49nTdmFWsR6V",
  "key38": "43crXCfwBS3XK4qy7dWHNX17X4HhES8WrnAgGX4MM2PHzzSsbCxFWMXrYhGDbcSZqau7jfj6nQtfuiBNUmJuodJh",
  "key39": "28H65sLDRATSWXYM3i7y7AwD9z6ytPPzcDF6nWwnCKTMxKXTF4nYh5HRafazeFZ8iYqGsqDSmQJy6jjY2MqLmKHd",
  "key40": "59ZKNJ6RnLTFAwfPmAxAPGL1ZsmPMSaUJvXzxn4oFU4MRJzceh79rZ4h8c8NpzNX1SkHuCZJoXirhxZG7qAXNCFa",
  "key41": "54yQpqX64kQiqwbtBaffPzoA1DVpsmKMBrgjdY1XYZX2oRVLWy5yUM59SCD4JX9BAqxdd4scqSTxWRWCj2Zo8L3m",
  "key42": "5Qzpj9phuvUadHE1RYFTDsggFRjv4LTBzB5t6698At17oy7zkP69LcDPdLa4K9QC85Jr7eC1jQ626htvjPWCpwLE",
  "key43": "2twjEaz5hSgk9qo7S936tzWqaLW7N4yfveRSuyv7j7WQgcYdSaLALpoWnpk6mtfr1C7GCQQkQYivnbnsgP78dqh",
  "key44": "5brc4cTvjkjmcjkn4EbYi2QZUEbz6NySdmaaDgrWQG7zaD4bAGBMTefUdYkTgNK7XWJdVn8cGDP5mK7gZxNn1zJY",
  "key45": "aQ2kp6M4fKgFv3yP1bRKukDnuyyvPiTYcXwBGfkbGY2UeCa21R5pW4RW2emu9naaBaWGjXFLP6PpxazDfNF3fkA",
  "key46": "4bUonB66CYcKbditfTSiF7PbTHN2NSmbbsqJHuX4H3KagWUTdEtWwMV1AmeAw8ps1gkzowZ4MZ7RxGht6EBYRSML",
  "key47": "5EQoXxZ45HGKbvgF3kqSm9dxeGVF7hss4JqdLjpfZ92F2U485TtPcAMVTicagQYvQS83Do4WPLx3RFzsMom6ti71"
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