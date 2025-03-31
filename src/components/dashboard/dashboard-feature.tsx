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
    "3z9NXqKaz7kYhbt4YRDrAKnyHQMqeCfZ6969cdYzVKfymLx3ZCryB4KAp9HGnxj7RwaTZbWmixordTozNCYDRp3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cGVqJEmvrHBsUbJYiJGnFuyspXCP6nPVWcxNWHL4EwTbRJH1JU3BawRXrVRBUohX9jDBB4tyTA6QzA7zc7gqP81",
  "key1": "4KM4dNzstyRn9duaSvdd2Y2r5X1gfKZoreNCCqLxJwr1Bw8eDgp5HMDug6jVhKfZCwhkbZSmzMJkvZV428qt8zHz",
  "key2": "4bF13dTyZi66woTS763pw5rAaSyVEgbUHDMGM4jjfXcqQnuLQVcrCGdzhywk95m1c8dH6cww7dqKMa4Vpb86Q3r9",
  "key3": "RVcWJDmdN66EprS3vX5jW323xjSgNDTieC4o8nDYLYsmxCTBzFZ9C3fpQUJweujgk16h431fDLuRfM12ieCropd",
  "key4": "3fHHdjipkLLta9NtQP24zBZg4va4UmuPQMp4kcKbotygt1nTEHVrtiyTLa4MrVait34G1fdn3ZCTLPtTUkgy1Jja",
  "key5": "SMBcqvPRT4MvB35N6PyWdTvhf46neFnRHJrStP5CNJb6BDSXEDtB4XUoS5bU8cPJtBpdikv3GFNjxqawx8aj2bX",
  "key6": "3KfWsXAMHrKmLg5F7siMRD3t3dydiXo1nf42rvQeuexzUhsGkouHwroHFv4CGcnGBKKQbLLcQhNodEUPubH8a25R",
  "key7": "VhBT7hS1XBfFgCbjyfs8zddjGhDDRChAy8qTDUf7VjJkCQcZ67PuH5nDkSZX75xGwUyGZBmmH16QXzdvHSXg3GF",
  "key8": "2HutGSs37nki4BqzPzxqdNDVV2ZvCmszNqkvoKajrE4ahuBrXaYJVgQDGdN9kyr4bitXzamxXZFX5LMm82PirrGL",
  "key9": "2Hh5n2LSLBxjLk4xLyNYPaeToZKEsqaKjAA821jBNHL7WdSSDbHFdYqrc2UvrxMuhuCFY64AjMfk3wYcKKTVJkXB",
  "key10": "4wHcnHaBFfcSjHZ7Gr1zJJXBb4ywZecojxP9HZFtbNKRENDPMtzUA4jQQk7MTwRR2FXQQRYX8vL2bymyzW6vNk8z",
  "key11": "5d7N9iuMnrqqscQVaZyBzPF3cuWJDYiSRKbikBHiwkCghpaM2SLmM77ftVpNf3x81hHWu5YCTw5Dev8prDEFmZpV",
  "key12": "29mM18q8CNkvcGUiiuMZv3P7Ka4LXKgr5iQsyw8jCnbhXxk6NvaJmSocr46gkmxfMY2usdB37prwgd6vVqZiGoos",
  "key13": "47UaiHANaqRqVSmWHfMMPCVMpjSCShN1JjrPAgwatxAqFv9327koDsG3ZYP51pMTxGxfviLRFrR9g29mbycX3X9c",
  "key14": "3UyWYGXBNgehNHVL6pYRcH3jHmy6KWqH8GeD8YoZ4V1o3qQVrc1cnoRtFqXaongXenuUXW6nBPmLdtwfKptf4PQV",
  "key15": "aWpHWdJpjDZDMNTCySYx2xKY58SsGbgfiApWjs5Ep6qfnMFfdzqxe31N1md7FQbwqnSvnntCNT4nJerZmoqHbGw",
  "key16": "5od3i9QBLznoSAYM5R33AKBQQCScmyngtkg24yCvT1KHwGzGRJkYJxPvF7F6vEUCSC32HeJEs7Ww32rBz3YQMdDa",
  "key17": "NZeraW2ceJEt7nqsHr6Womudp7FLe3KX2kt44mRcjHvsrdmUaFhNGutNm1wAgF4hBgCxtR1D4oKu6p9YTpDvBfM",
  "key18": "2irtKNVEYfjdRpCvokXw1Jx7JLegkdGAqoVP95WVq2dgsW7ZycFd57DxSy7j2aSUWBTvD75CspGv519ftQENE79t",
  "key19": "4KSCZ9RPsuaUn3wve8qhfWX42NGnxL6Upr1mJ84HR7qxkZqubLQbN8W2hDK4rEUFRmyi1jaPrFDCJLd6V2dDgxDS",
  "key20": "421KbidPUaoqstiN6T1bi6hFVTn5MhCBbr72ah2v4SvTdnrhwNUxCMwzZy4x7Z5EVGNVdoT7bEYBAoDpKL6fV9Ps",
  "key21": "4nfhixnJxofDEkwndGRrfqaxrALSpRoQBfxZ57jV7yXSgUK1u3rhaPTTjktrJt2FFAuLw2oBQQ8pXLAicowdPvy9",
  "key22": "2ijnKCua5yGXNL69tXGPVbzkfuLkJff35md6U2dwzcbZbhbFXgpLMFt5EjQNtQAPU6tBkYfhWbMJX94dUG7EDnAg",
  "key23": "4EAZTBsBR1qk2xj2LNFv6TiwQ4Adk3Cebff3KC7pif1fnprYqE9NPKWEJmNG9s6W4G7PeNtG8xwU6Zac2YznT6Ss",
  "key24": "5C6hJHt18Gj3aEzxyCGSdBre6d2kSsQ5eWnToHyVWRAY4xQZQVHfAjgkm7Gddw3Tt8kfL1fNgW6M8yEfSprP664B",
  "key25": "2ZVYK4ZSBQCwVSswYsfJaHva2vdZFBqEzhxoVYXyuMKjrjgfxgf9hrAAFVPphDnuan8sGet2WPeWY8Dsvi1JqPLK",
  "key26": "2XqMzdJPE89Kz47zHQYT3LuqVTyzNWjawAK1aPMCWssv2Wzyi1K9pqbm1XVVDeeBynbbKoVPfi3Gy1cv2ADzdzHM",
  "key27": "35rvpGws5fEYVjN3rCASJVTeutBhnCWLtnG5wksJeCRLb4oSmKxKu3dEffWHfmXVccs5KXPNoHmhbZuxRtjG7g3K",
  "key28": "2dt78cMfKiPvS3YPn4soYcWijKyYRDXkQYU8nmiudxkShK7p8gpa7h8A1VTAWP28GPVbxf19Qkznp2QH6B8X6sXp",
  "key29": "5tYKsMVYcYGG7RAN7ezJT9orHdopNYhMqjjqmRNuCpLuSnF2ebexUD1rZMRkaDW7y7JNknB5k2A45qK8zexY7mey",
  "key30": "4dh52LFe8SGtyj6DnKH3tnFwA95gvh8L3GuJa4gA1V1V6fNQpYtb6LpkgGqo6DBdm7rsZyqRRCD29Etiv2uP6EDp",
  "key31": "5LmdbkiucUrNDVKQrvoeJahAGrXPu2MyA5tSEoakQZCg6mNYXfUM71VumEuPoyrVRUGxP1dPVFpLkeaXKEaRDnRP",
  "key32": "584wbD4Buj9G8U7NkSsCopA8khcK6ER16hhRkZZoKDgD1THxyFBoiXhFuU9U3uSJ1qpxVDgcRNzBu6VCtQgYFGo4",
  "key33": "27LsjAH4azq82VH6nAXBoE6YWihGEU7sqR2XJ5MKRp3WFPbDroQZfv22RfXDBQADrJSWR5kbR3yW4jBhGhqJGrdC",
  "key34": "ZC13gHWpYmWb9LUjg1vBBHmjYuApRsZAFKwrtNNaktyKaiuXA7s1cW3kUc2s3fDWW6Yy5iakDjTvD4nquMqK4v3",
  "key35": "32sN8SAF6RYjaHKLKCzE57VQ4uNXg1Ho2TL2sRJjpKxyHsRb7McZvzuzxKzVs3At2Hrbxe8wfP9za9JFyhbzjuU4",
  "key36": "5CQMatz9kfp1XcpNbP3jKHzR2WN8uHvUFLTjTVVdcyY37cF4wV1EyfGtqvD796JYy2mL1iDSnEvFTHpSq6yptGmq",
  "key37": "47Rk3xgEZtjcbwrhRRKW9SXEN4nubdakV6DExbpbEKXGkQad9YymYTkWZCjje4L7JuZSVLTofHoYwr4TZZm4ZojF",
  "key38": "4B4E74rDCdYaTyAQ57HJ3uxtxFyZWZbhNXS7PDTGiUradt6p1aH4pcSn8pk9pxHAZG8YS8t24rPyrjFfUwkauVJy",
  "key39": "52jEzhYtQBmsBDVs7QAwyKSoR5su7dreYeYR2SWnn2Co1zy3oxALL8KZExecDSFZnqcvXwCi6KrGebjoR88722Rm",
  "key40": "5TWhACabn6oyhywSfzwbyhk4668U5yc7cg8rGjxCFMbfsWURHRj4Qj6SUJPC6oCnWHJCnCgLSwRT46Mepkd9CC2Q",
  "key41": "5ULBPjpmbg5TvrXzts3ANcsy2783sGNc1XyrPkFBbmHqWguit9KLwKDUjoAFDi2xMEyppfshFraQwgM9qczWWdoc",
  "key42": "8zZY2DPwNWkATZ8rx9A2FrVJsFeGmunBdiaxst6xDRZhNcVHGcS4KKkQKShC8LpU712kskLz7fXKMALdccfFMgX",
  "key43": "3jYoHYGuVNJrfWwGA1PTHVvQmF5QKpmw8HQGFXkgtqP8dAZnzxyPKWQTYU7NLJX35WjKKc5fWvbqsUcorSTtnkoj",
  "key44": "5Vf34y1pAagUbiQyH3NbRSjQfESSXoDDARZEgfjhfLtRhFRNQ473VKZdHCV9ZBhD6TMSrBcjQ8dXTqPurTYfqsBP",
  "key45": "2SWmkikVfQtFmecGG2Lwe1WnTBPF6sEBzNTvrQ2pYNxDJNo7z6JSSRCTCo2LrwvWgBX3cD8rTpsjuFkjv3B5PXtt",
  "key46": "4wJPBCJYoEFpDESa6tzcBbVcScvLh8NeQGx2kg4HaiE6jYk61J7o9k6j561Ggu2E8HfmuQ2yYZbraQsEEFNA25dp",
  "key47": "3Z6gM3XCkVaKZv7DwijW5ftrWyKvHfjLMxukdhCwojjG7DpgepsowLa6zu8tdfBLhTRMkfPAJMpLMHRFGs8W4smh",
  "key48": "4HsXrZqcuqsAoXLu63iUMo69fTvk2prNinwu5J1zLa1yTfqADf1jv8i91qdmxWtCbnFEi9mntjARSSBV759V7LCe",
  "key49": "5q9dsTArJU98L7izknU5krJv53s5nTLv7yW7MmNnpmEzFVSx5sqFNCj6FPgRzhmCrG9ncb4EYhk3ESHScG3hS36U"
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