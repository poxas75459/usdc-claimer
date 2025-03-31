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
    "C2rXjNe9SRfU6obiTqmt8Xtmq2RqicEqRFmjMEt9d9VSHspt6RxWU7WRKe4qy8dw24V4zmgCk1iFpyHY9YubVRa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hU4YVQmB9bcnptLQfUfbhJPEMEx666GEvsm1do49V75EPACaPCToJVRh2dhD2sv15ukzMqB5V7x4dGbVtgM1Ukk",
  "key1": "3mPWxZH7G89R4v81FpaKkDxXKyMwsWch7VbTtVao7oJq5SStrbxAGwX2DmaFs9S3m4sKbtyLM6fDFvB4sZdZbYkB",
  "key2": "4Scty9MuwKiZsYp9HjbTQKU3a8CYom8CYRCL4Ge3UPVahoheb1Rqf6nCkAxgf9KqsAZTdHmy5qQSq7k8tA2x3dD7",
  "key3": "3Ft6yr4BanjKxMcBgaB75wSYf6pakmMomS68mnnbeVGvMsui2Y6jTugUrnqZW4ucxKFfXPjDQb1NN12tycgLbujw",
  "key4": "5H2yE8Jr7ZxsQFEafYo1rwCWV6AFLnJzZmrp8hokKPR9kHHqMiBBvtJoqMcMvjZrmgzNTureMTtvGLyJe8t25nda",
  "key5": "2cgqMhmTFaMuvkXpuvpL2Zt987QcekQVrw7jejVbCsVkKd6hbBy72vvBvLY6KGiWiRcKFmDqrboGEHjvmNoRCdAe",
  "key6": "5xuSxLxJC9tB9zroBMWY6PmoVKHQR7D5jE8DGNSZJ1n5ZTxCCB8H5yXgx6RGRWpynEhn3eaeghXns2dWBtpHGEjr",
  "key7": "kuG2gwW7Ybiw7EurUuppkN7LPDZGhqWkLe3TGrjRg2pvq9h7VUn1qKVn4a76sBQQGxFoSFonLCbP8B4AZnEi3bg",
  "key8": "29kb3o5WcVxsfVnbufa3NPb5zfdhkipCgaXZszqT82dcAGVunGahqpDS9CJKAPxRvf67RWqVsfQQ28PHjSkYNT5H",
  "key9": "2pfHb5G8oMQdGW24Fj8VcdawDUn6vpywT4j2jz9xx4KCdEWuHN2RCU4qZxfPVGtJn7RPcbDtLvCTNytFzYm1QpQL",
  "key10": "4w4rEwxLyWHyUCe9chAZn3Hj53gb13QwFoG53brUAnKnjSu2SJaM37wQgLuJzxEq9kD4HVbNF7fAp2tscyTURdH1",
  "key11": "4BcwQ5Sbb7sDoJg3Tuj1Wpg6rPCgjjeFMafdgFvwJzCoZDZPTvPWgTczHTqJWpj3dWout2CW7uEASWEeEyaxtFz8",
  "key12": "66hLcVqVEqcTRYJy8uk4bF4t7ppLxgvS3Vf79CDFU1uoQkBPFXPovxj4K4pRDPbxGDRqpm5NzqEMoKu3ZJWHgWBa",
  "key13": "2hNKMCAgTpbr2XrX37it5tvE8nZu9LbbRETGMHZMdRyyBqH2gzLGYf2L5MvDgb1EBXGsmFyavxfQMhAUhRYDr3xs",
  "key14": "2bPFqjejKzYkMKBgUPQSToHwiJeFsBEFH846A4m4DWp9bSVuR4uSUeee8cv3X98ojxUhF64xgsEq3iQw1MsaQzK2",
  "key15": "3bRkUNn9sDsRfSnEULASZ5T2mHJ7oqi8rbTTmbDucEphu2iUGhY6o3r6myTnu9CFfEUcSTJoYrZZC9rM8tMJDEp8",
  "key16": "63RRhktZwbQkt2txpebfjGuegMHf9FzjHRjtw5AG7af1TFL4xi9Btow6MYUdnQWdGJc1asEJDDG8Yc6wofKtTNQ2",
  "key17": "3thwQxm3gP6arKk1ELUTnDzK94ue49DHn4H9pEVsxPc6Mgf6ht3dPHGRKAFgD7azwBZXvQhLfUDAMusN2DRrPJLz",
  "key18": "5qaTk7cAsPv6mYaLXv7UFM9ykaauv5H7558Pd2r88FxMpVx6sZQEUtEr6JFiMFNvXP3r8v5ypDmikRKiYVKpEH86",
  "key19": "47VtJ84LL9KirufkHWsPaQDzjGi3XLZK1sYJBnhgtjafRxViSiYMQoo9eW1qe6YPwPMFgbkWQeufJq2KZW84t4Jb",
  "key20": "4xzfnQfRqW3ckYrNkAHQTJ1LJG3cG4TCnBMcSjCvRsDKVisUXBueHirZ3sE3KomezyjsWZ6gCPzMsE5ZFKTRwgJd",
  "key21": "2jbqScH46BMHSN1cfGzFDyPVjXQo3PRtEfSkQfQw17GqwU8KD7Uq5F27EZUvmL9hR63Lxzt5HifZbiERPer5fLcm",
  "key22": "61W7fswRQeSQFDUs1BWdkJZJtBnLJefi8nSLAic89AnFMX9J1Cuq4aKKX2zwgFYFvj4xVEDH6fmwaEays4g2EA6s",
  "key23": "2M7Jfm9qiFiecbPKLRyr3xTqNJdf3XdQuJ8Fdbjs5GhS7s2WGBQCQXffRe3CRY76josfVCZzkRwnW2Dxncxf9q4g",
  "key24": "5mcCS6oyYvkamiV1oN2tRNtYRYxjbBRxjn7qH7zM9tWFvWgmiwbXN7798nrEUamgqdNDCZkECB4nZV6XTVUsQdiZ",
  "key25": "2UPDxH5PwJcwVpzpFKYmALhKxURqgA9yAZTPaht5iAe3CYPWMZGGHkeEdkCT1GUDKQekw53eUwQ9FtrYZCx2N2Sa",
  "key26": "3skqEXXq6imLixyX3RjeJjuBStVp1atzbTPbZu9DAKUQDDmuBeabEv997odd5tNU1kxfKqPvZAY9VoDaeuJgMEGd",
  "key27": "4KcngqaXf2ZMEABjoXGwzrVCLtqGiHkStu77eTULAB95F8W8xaAknryAw79Yy12Q1pEwQdT2KJWQBWagHcf6tmmn",
  "key28": "4QPkAxDo373EJa7eMCHzDJhH7aSWA59PuXfsEUkFG5qscPKyHzZutTzvnSS9dxH8tp1vvnaKeGULgShvr4xkbA8m",
  "key29": "38ZYhB9YgXrXuNsKzMCDxmC3NrC5rNhTvREnS4mPLQYBD4qj1J12GAirQgSWZLaZXhujbLmuHxZiGRc2bZJCPKSw",
  "key30": "4Xh2oDe41BbHnSWxJVTnpwBSCBC7aiATBCtGvpoSTSV6uyusAcZGXdfYzxBJBoVnj3dK4pqRcVX9kRr7dip8ssGN",
  "key31": "3ch3Mmh9H98d8FAwzAPdZnKBQdNHg83kFc4ApSh6WBEGDHE2T8Q7EkK9U8dzHRMj8LD74uxPb5X3ko8fiwxZbX9e",
  "key32": "53iA6CXMZ7Aw9HSNmBPnhjtJmMUE33KfgAg78DShdrhHZ5MvGTpPg4uu2ERTMwMt4oeq25BuiiBqpxaLJMx5RzGj",
  "key33": "2ZifYvwwanqbWJhe8e73JPd5D8c8kSPWQSxiYrcpbhMA8FPEmWakgfBGjuB8aAZ1tugvFozRMKUUdKdhjDWbr48V",
  "key34": "2bAfq9hbqy2VRVJy4MeZ9igJ6PGGU4JUJAfDKbi7XZMdavwVdYtVdSTXepADPvyyP7JpXrU7igVTuuRm7PwaULca",
  "key35": "3rJnJCJJbSmbBLk519ReCfYzmdQmmhKGSuN3YeHb9NBQJncRUQd1hUjAg4ff3ZQ6ovLHmBjQkzqkfZX1medy3rs1",
  "key36": "Mzq2uVainD13JueHwDkeBt9dVZwmCBdd38gzGwkSXFk5r19kGjwxyHV3StKSN47aM5GPWcNPzKB3yNzo266T154",
  "key37": "3guEvhU4trRCMZ8HNZPSjMQab2njJ2zJovFXXf1NhEwwuSRGEGfnPwGQrN4zfBVnRFzdL21GaUocyjkyt73N5LmE",
  "key38": "3KKs2uYufXKxuvSzZUWy1o2shZjbGC8UNFWzJwfzcynd85Q5wsDNGsvoUK7ziSw6CywhVTYFXVmtBJPMzqYGDbQx",
  "key39": "2Wgwow8FDeriqoNB7wcK7PNW61WkTWZYkGpVP97M5QHQfEiFY3dQKqkpLotJrtgTTRjrw7bBSYUpA6zpV1SGRmBZ",
  "key40": "4N1jL1Y96J6unReQvHGg67YPaiJUcVsNPjwUZgkYtxyNAFiqecP7YyobfDnMzpHtajHgoZzocSBm8mbBGq1hc8Mc",
  "key41": "2jyMcCFgAo3gSGmHGoznXuDsqSgdin7ieCd7Jc7kgpFr3y8S6QVcNCf71GGKAYjnwxoFjn4sQ39KPCBdE7HVG8TM",
  "key42": "3Zh33A6zZBZiqXeMsoJ3NR2sfHtmgW4xezWTxTmhAfjJXkE4Hx9FvpDJyej3W3a38CV4nyCfURShDmNkqLAHUvzp",
  "key43": "5ceypCvESVrBEhtgRcNkr2qdiDE5985LRtG1mLTJVKS94gab2iS7bEeWkgVjAsGbvk5YBKs7u5cJd9SapCugBqiP"
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