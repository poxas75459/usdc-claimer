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
    "2Wfdm9AUNgdHDG8ATQh3mupEbKxyqk9kwepwxTn85yUkrM4sYbqWyoYcVR9rD5mDtvLVtZ1QoDS4bsw22ZTpJ9zJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w7bScNv9EDooH1ZypTcBpgT1Qt4d9NYgmexcpFaULab5dM9Y29EZFRUywTgTarS5rLVeWb1RhgBttiR1d2yLgjc",
  "key1": "3hu1zG19q2g3HcmXoSKswmWXx9H7DsTTKcFMjbQbWCDxzYQmTKzhkoLVP8ewKQPjFrPQfyVNEXWfHRNvhHsQduef",
  "key2": "42VDbs1yEcgTP3u1KstbhboBbWDyQeAxNyKfSfxL2dgoPPbkhsm9ZgigrLFhNhvuEtN9RXc8cjGXAgrjYcY7Rfnu",
  "key3": "3ZWdRJy3bmaQ4QWL9ULK5fwWz3FLvYSe7W8hHTJZnEL7zTquTNvqdie7g2AGatGjRYt8oFP19Qj4tXjr9t7YD3vZ",
  "key4": "giJCd4PwNGjc7t585suBKHN6T64tos4mZz8rqZA6qmRX1iD8QHVgieeZhBmQ9XnvnsbHq862XrdX6qWsKSvmLVF",
  "key5": "4ApU3sneUTyY57WVhuP2AeD5m5mbApnqg11tkeY6hfrWeCPEfSd5FUSp1LQw1SYvkWCDT84FgM69DYY54UFZqmUm",
  "key6": "mbpgoU4ahcBXxYbBsgeVxvvucDRaxK3HT3o4ZCWBQC4uZeDnukpWe4cwLXwjjSF1nwQSUag37nGWBBHkc6WxQGM",
  "key7": "5xE8DNveqGZXTPHSXsdFFXD4adk2s1UzPuzVcrDg8qwrdx1qCRhpqxcC4W1CPze4p2W1rkCuYKYtpq1VihgQhC5Q",
  "key8": "2FGjLnpkgUFbNbp6yGFFPNBdtABBBcF38t6xefka72aGsFaQEBayZqFwrg2hrc9Rt7UXjGDF1Ryqu25rVaTJxyen",
  "key9": "25LwQhnyEj4Du9DvWno5B9rnPE57ogDF46XWv8E48MwB1BUaDf3xGqdJyEgUALvoScZUYzy9pSpwhjfhKEcttgcH",
  "key10": "2E16oVrugVc9qnU8RKkVVLpoX7NBgruYgWVu8NqmNF5ZTMNmYRkkWMr4qVpZqPG6J7wCJQFcziZnWywepzBEdbjs",
  "key11": "5e8zz5RNgBdDmpS6PmyhieYv4Kvj7EFNQ9t4ogEH3ixnkxXE5SZ1BhkgocmBMWMkap1xk1WVqDFYeaUC22Cp9tJa",
  "key12": "4JLkhrSCkhujU4Ygpyr5C6AT6ETDcjxZEM17VvY2Ze6fd6vbNJbsQnimBc4FpfnBMVTTcvxdMXpuT2BkC3JYBKDA",
  "key13": "21QqnyD4GQT3p3KjEFNGYm4BnT3yEpuTgrYU1PwuCPVFoRa9FYAjnZ155amiw7GbQUotM9eX65cd2tY152pda4DP",
  "key14": "476AqULXVm7rJtdroz9NMjBNLTR1FYzcGm9hG556H45CgFq3ViY3ecxCXn5tXFSmzMma5LpkaGMePWpKYV5wjeuM",
  "key15": "4jjaLxSRtoqRfaJWcVotUtNfjXxEFpy9BR7Wic4UjwDMbG2xSt7m7qGutijjHwDmhp8qHhRHDnA8oQCgWiEH9D3e",
  "key16": "4off5HxsYyAURUS2xYq6UoFiGL3wysBUuYeHNB353U5NBnjXqRGMNGUKYph7N4cx7wKMn4HkDCcURC5tpbma2Rb",
  "key17": "63MSZkDjs39TuHdcuPdeEwkWhaC66cCVWtH9hzCCWkXmMrS1LvkCUgdQhCuF6t2UhQnLreGhqU5rzhezmTkrjAaW",
  "key18": "46za15Wp4krzXGTUpnXL546PNNVLYRAneCpWqUqS7xuZiRVMTEF211kHkzbEEQs1hvZ1iWuekfh57aD5xRp6uvzS",
  "key19": "5PN8nVZuPDJ5mwDBjbcduuydqhFk5HEDS4c47F6Vm4j4yJ35ZQtWbt949UBtvFwRPZZ77DW2s1RdvnEokCywECo4",
  "key20": "29rX6ksWcrtN3w2YtvguQRKQqbKfNZNUG8SQVn3pZPdxwPecBT77FzD1ddXJMH81MawQXQh45CNfJ6hQ5GDXuVfQ",
  "key21": "sodGzMD8rPnzCBRqmXz31Bq9WY6CEJBQsY8dsN5e6Ua6sjPmAu2Hx7pSiAjGSsNwhTaufHG8e2z9Tbi93APcXiS",
  "key22": "5PuMJsz816Luxs4SZHtSa9s4XR5sZ7B75QurrQfS5RSmvjUYbCzMm1c6Nv1QA4i9rLrYsSuxwLUU7j8wW86pxVtM",
  "key23": "ALnSmrJMx9tB5BEgfnqzVTHh3XuLde2WRobKahnrskndYiJGRtSAXPBzhZSut9U1nBoauk7WusSot3osCFMTsfP",
  "key24": "4MKJQsRUHir5pPf4Ep655tamzxSRdnnuGyPU8euNhWddAjMBcAciipvuLMryqYYFRxiZPAxXPv8HnXve2qjoLwBu",
  "key25": "25Kye3jQSpH1HbMPXe3PtYVkXfJQxDD2odKmL7MZejdHAWQuCYZjkfyLGp7CihEShYcBPQmUF2dUXv4oMfJPuiB3",
  "key26": "H2G4irvFBiPBHJMUr6YjwrojhnxrCsCX79KzJGyyXFeVs4PR6byjGsTk7afGt72FEHBpssjMzw2yDAFPVQQvwFQ",
  "key27": "xkpaphD1eheM6FYFQ5W2kpH4dhzVHLT1SB1WMfYjTARL67SqfRnBfhECmj9UEXpz2qqjGL5D216SEKB1zCpdJpM",
  "key28": "5dP7caFcxZEByWGoFmmSHCZ8Bikdp8zXSuyKq3EG8G18nLLHgSJoqK72DXBi69XU5Gdtvv6vuvkE9WXs9YP5PZ3t",
  "key29": "3VmcS9NQkDm6Qw3uMKmiPrgZkdhscWkEszoQExFYVV6WxH3tub1tF5zdXHD5jRmh45xf8HdhN5b1ToVXN4bRsehA",
  "key30": "2y8vs5Vbyh5YTkitAhc6YHjDao1AovoQT4d73t3c5pj1q6aLLhKvEziNihbDieKxdrDrjrB7aNjNyRGfRp8x1bYi",
  "key31": "CZFvQvdhSG39LjUSV7LXsyytvR5ghhnSQdqxafFQfeSnrL1NREkBQZzT2pM4V2KbrU1mhtZePrHBKPwAbdXqtyj",
  "key32": "44pRKh5fapJzwLqengnm8SjzwTWPAAijFnimhGDbCE341Z7JfVcXK8jqvjYjdmvXmovtGN9g2qb6cFwcsRJkwBc2",
  "key33": "4uBCk2aKLAQnx53Jt78GUb2B5eyQuxiXYgnYSNuZeK6jf3x4mQnNvK7FMifkzEKzji2YYcqaUVByxkqZ29G37cvu",
  "key34": "2UjPU12fprqmiuHo8hzfMcC2q9ddHnqdGJRKcNVzzQ16s9UBGD115jKuTMJsZzDNNfiTVo2f1wz4gZaD8ezjtERE",
  "key35": "4iyUev79zSjqNEKsPFz28kgnbSJU1gWs23toryrgVZJoQZ4n4jBwJmyr1zkhwobh2hHT4Wt6s51bQcUSSrZnezpV",
  "key36": "PpYSfoukiy3SnqgKwXbZtpE4oykMqfAfPBNFRRBiwAyHgJr5KRAm8FVUunZTLp2xpaqKaQvTnyfGYT8Gv7D65Yg",
  "key37": "31uYyNzNVyHcS434nP6q7JsGZ9JJ9Qr2mZvBVibcwuLVDjs84uw1ZTvZk2EUyzmb5QaZKNP7LVoURyxBwDYVW9t6",
  "key38": "5QnXJrEj7ucPmNqC3e9yFXKwg7vPSACH144RBeynQh9318GLswsRqMJFFihXe4UTKz6rqPkeg2Avi2QcwAP83oP6",
  "key39": "2E3GUYo651fjCZbaWY7FeWT68tcinWdqX4Y4vzHMd8o89fX7CdvMnvprxfWicdJCJz4MbQDhPLCbdAQE7ooa64Jf",
  "key40": "4idQjwApqUuFP6r6JfhxQXLHY7CGTKiZixcaz1dKYzbRTskJYZhSb2j6QZdA5yBSoenhjZWPpJTxTL7kcXZwXpGs",
  "key41": "2gZvuWR7Ewjfj5YqN8E2ugg5FvcyVtGf9F1ayHTcLnp9ty3t5QNDPgGZYX9smiKu3jHhyzZWZEY1hzcchEr6wSPo",
  "key42": "XwYAdzGq4uPcdcdwMuuoZKbnvCMafjNnM5cyyF3GniQKUTFTnBRSLBxJMUb9EgV8wHefskvruBjZHMtZEw3mP8o",
  "key43": "4TmEZxPFSyxqzEY4KQGFgU86wnr7rnvCQHUBBaVCbWNcGhxRJ1DKWDZWGagypLHuQcqr8zywP38vfkct9jFfM56D",
  "key44": "3vXHHB5yX5k9B4Yb5543AjUPwu9FXJfgxFjrmVHPo1z8TgfSVdH7fUJAMxifRUUMZgF1TMAVCZbJZw8s1PxzD9V4",
  "key45": "5fqfSZ69VChrCySgKQhy1bQKrycyd3KkBYJUMJS9NwG4ta1uWfAqrYJuqMfHXkeSjesXnUaMamSJPGBSemraBmoQ",
  "key46": "5acT9bMj49g7XxXpHPJ9wGN3GL3ydMVg1wfpYpPjwUGTSKXY7EXrDxyJdEmM6LhJucFVQrKrVqPMEqHfEYPcWwyC",
  "key47": "U27hFhgUkKWC2zkoWatvQqBqKKowvULdJjAVr3JLu3P4zzPcraW1uVwVtarZfSvc2GHa93ELHKSmwT7UM8qwjm4",
  "key48": "2Mg2CFS94hxz3wWJ4ouKsou1XLHKZRm3WHsohRXqRSJ342oFARVobyeGRf5JMdggnenA5M7fckZZzhZ3TVGRCzEi"
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