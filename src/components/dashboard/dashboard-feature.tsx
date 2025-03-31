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
    "4D6QyybuYFdfwa8LcxAm4necicwQi61kcwBLacbrqB4otECcytRtnViP1gEQaWDCeJG4wyoJbfLAvLgYbyQi2tB6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44tXRpyBC3B6bA8qcrQeLu88rdkGfDmS3ujg9Ueu1dp5csnm41wZdYDw76ttaMDVjcTUHDLU585irhjzts4cyEfj",
  "key1": "3YbAtWQxWMRa77ynYFXfSwqxg8PV1nfhqsMY2LLGzgdEPecMAWAyKBqAqZ9MZpdT7s2F2uXStK5jj4X32u4JvJAU",
  "key2": "nrzChT2JoFP1u43PkAYt2NJ89kEzYZwVTc8ubfRTVnJNeZyDR2Qjn1S1Q5MQ3HfLiKGQxMtc7wqzp8kDMne8ZNH",
  "key3": "2DXZHVJ82X4LmVYTL6ng6tCmfZFLb4btrji4WYPamScqHSXW2hvAqF6vJpWu16VTSL5PDEJaye7bH1MsV39HUMGf",
  "key4": "3DYjpzgFm18T4ySz36MtJHjNQH8Ch6zmJPHcJzh5qZjGdKLety8zs6tQYjcZfx53i2C8EsCSNevabXEcZ7Fb4Gnm",
  "key5": "3HqVzki21HdDCfsYJaVA9EFA5qmC28TxKfXv6AU25oRfXu2Fj5W7zE5NV7Z76qYs6SRyA5UukhBUqaqBH3BKiB7F",
  "key6": "4uqYNDJaq4xDtFgAg4fAYSXiR2jSE4WW8bwam72U9PUA6wt586NzydeY8cw5bKXd1udQ86u2DmKFGfXicDd2au4b",
  "key7": "4wZJ8dddqiwfB2g7WCRgWgTg8jNw9uagFCH9296TwM9N5qNH61SPsBdD94wVPNMx9t37Mgi1zj9EnHHcUUsu9mpy",
  "key8": "4XQZ1NS6DmAAf3fDwq1yNdpE7ZtrCTgqdYvRPhwXL2wXyxG7Z6H3TvizTB4q3M84NZksRMQoNSXn9zYowzrsB7Hk",
  "key9": "5iH56FBd8UAAef3aRHJr82h1UYYPc5Je1L63pmUPALevJqEM7BaaSRFBEUAjPWWUdSKyGz26AoHaxQBGDry7uVMg",
  "key10": "421WfaBfuFWMUKbVtRHJHBi3MSBrL5rgqbDMGChQ7sjZHF945U8fdUkUH2WgvpuFaXZX8exA9oAZ3QWMQKZ7SKHp",
  "key11": "4Z4zhyQTBecGF5t57r3phu87kkgzMZcS1o5YPbrEsQZBFSgaU68t42ZVQ3Vm5rE9dBdbtbMKtDXwg16PhBz34XfH",
  "key12": "2e7xv53vQryXvvvJNgHVDvukgTHwgCAhfRejdtrzoGMtrtHWBYstRyPkdzB28PZJo6EJ2PpAgVAjShvKXq9Z2UQZ",
  "key13": "3UALAeT8FTEa7mDbWtcfnxB4PVWY4bSS1iqGZX72qfAYkctoXtwLM3mbUtLqTqRJhbaof1ERHVCdUcpDWcXMU6Q9",
  "key14": "4wAVeF1Uwv5RDLFsjxHgdqKFRKoR1vJ2foqxNoEByz71wi2iiovZq5GkWDJW2onGF5tQfn17bvd5pfbY7t8By6u3",
  "key15": "ysRsVqzGKPhDv513PNwDHh4M4mb4XC9o6FjMFmKL8FZJQ1uhMdmMYqYsogK2KxuqQF4jtwaU41xJE1g3UzQUPUc",
  "key16": "5WWV7cQFgjnS8sSGe1ZFo3J49YVEBDHxYQ32k1e1cnmPPd6HTAxNgQGFdPD1fP4NJndAp14pvBtZmibwKodSkrTP",
  "key17": "3fuVTTNegPtxXDpzHf5kVSxK7ybaLZpifEaHbW3hS9BzVcdMnsczYJn1PVhGCqN2G9P1cKncAYA66xM82gk8ExSQ",
  "key18": "3xcPoFJodnE25cHVWd7QmzUDnWbRtEM1zsoAdxtjvW1cgq5ep7JEP4aBzVZZGcKRvsVP1rPKKKqPD6o8RDXDsUGz",
  "key19": "26MraLmphuh61WCLhTVySRw7VRWqgqow9zyVxxdFjB4xmoRr9vgwweUwcDnqzivNMLX13EEZMxHCVBBBe1neNTe9",
  "key20": "4giAqXD54fMgzZpmLX7whaBtvzUpTGo5nZRPMDY2DBgLWAJJy36AEeVYug8N6b83Fba3xJNwtA9shrX6ikC9hYKb",
  "key21": "5G3fPQ59GmEhmFhD3zr7KBMNpgBkDuAzgukLLW6t89zb9GfUqn2w832NQLyR1dNMENPm5nkrK4QsdxkKhJpZ9oHR",
  "key22": "3H9z3fYDSasWPMmZXyeahfRoZmDqxXBrosq5xWfx4DCtZ8tLMBuhtyx15mHarEchorwE6a4c6UNFpJgmJebLxxyK",
  "key23": "4HwGm7eRH2mwV4rLn59qsQVSQvsNRCQS1JR9q27ekHoraWHscTEJU6FqhFcoz9bfk7VQZczVwhWGdAVrSoP7fhwG",
  "key24": "5L8M3MaXQYwocmJshurEvcjV8F8XRrwBPGciXAJikG4wo1JxG7NWosa1X3ZY1ZZjzFPGq8saVzcMn26svUHdrZ8o",
  "key25": "3qzgbFtFcDchxcgsqTaM34gD11CNardVFhWXpRGzX9zKqwYjA9XMv9hBFGwYzGtPp3LN1VAXyPeXUCaYEVpu4wzj",
  "key26": "2WsGkjsbiHK4n2v6VKqPWzioCnJrqBDq5JfToDsRyuvXUTyX9YciMkMfgxz7qaLkTJZG1eXX9FCpr9NPr5Dpw9vy",
  "key27": "4aW11w6aVBgg4UHVzSxTt33wD4tHmbJfUebJU5A3B5qoxYqEWmttwPXruL8PafYbwZA5zTvNpbKchrUAE2GPxe6c",
  "key28": "4jjshWNSogMZngwKxvuMKnrSrGF96HwBgCrMjDGbc2ZYGAXzpeYNZQ3Cyzp1biDYJLqGAxBCGBivWkTSryuqkTdU",
  "key29": "TSuK7H1yx2BUAn15bXstpnKnC96wCcs4SMv88PVmp7MsdnHK3KDHFiwHmbHz46AGjMfxh53CK9vSjrt4wWhPWpQ",
  "key30": "4TTzT9SFPJQ4GPNXMo3n8ZQmZfYQEwSFeGjW82gFDB8xkGb9txUqK68PZkwrLkiNfgBbK6b2Gr5M4qQkUoP76JCi",
  "key31": "45QxSbVV6wxKshtNpjSrL15prR827BDxfrsV6b7nkEBr64Rq6huToohXe22u1WMgL4isjz4HAyG8JL4E694jqi1c",
  "key32": "3WdceLNChXeDi8f2PpXA6bJJ6vHVWprZe5ococmKXXhebk56K9RMvCJ3DSWAugW6USyvfzSBkiCnQyrATrDjwBJn",
  "key33": "2KVeoCPHhFY4nxfKHM5mPNwdKaFPhbQdRyk8NECNF2f14msBKanyF8aReZve5bhucnwwKMQK84eQtDb8AvcsmZ5X",
  "key34": "3tcM4fTcRxuqZK6be41xHNQpdzKJu6nRE1ugiMQo3eNiK39tBbD4MKmSSWvSfcwgV3rDHTeWdJF2o9cZaTzXjddh",
  "key35": "4ku7FGWmYLHrjFiUMq9sTTtRhgAkf8KFwuzPcYnBZP3xUS2FbH6YxMWzkxEnRYYQs6RFVxoEGSzK8YGY39xmhLog",
  "key36": "2drj3B6bDz65PnnspD4wJPFzHbFqPQCcTMgC1RueMJh6YSJpML8KPh1JwkfuFBYi8TWLW9r4Fr2DhpMipyDndwBf",
  "key37": "2Y4QMrcgBw726Z5ufCMytZQXii8sM9wHK5SfqgsjK1YkdkL1UP3DNpC6pQKTf34GjGrjNn4w93fMFdZgNdcsZkRQ",
  "key38": "2A2aJF1G8AWmSTodgy76er34qFkfhc3zwTJg1CTBgSiKY3351DkrsEqsfcpnmXKhSb9xbq6x5fo2wYw9kjCz3CXm",
  "key39": "2CjLgBq9Z4K3hQpVkwwVZCKd2gPmv2PNRmRpnmJaJbhZavZcKyKQJUdSyc8G7thtg77LiJpT4etGtHCoJ9ovjmPh",
  "key40": "33FLMWyfCx8XPsBUoXoppXCjLkQ7WEiv3fUE98mfiS1JUXwqsFtGAP6nY4Y9ak9jWjnu866N6Bt3CA9zqVeeBcYd",
  "key41": "4mHVKKU7RJ23iS3ZJUAjqy18cLxrHFPcx2KLfrkXKpo5yfgKqX8x3br74DVsS3cDdF6VYYTme4L5BAXPakBJZLwk",
  "key42": "5P3WPGsFUqc9qh5JXQVG72tbqHtEGkGJVShb1dczfZkFboo2pAPYK1DNhuXAx3ngLjezHqJwq4Uq9jm24cxdN8cV",
  "key43": "gasbPTVkXDdWq1zTPkkn85BQkdeaPZ6E7Tpnrk4G4112SgSCgr7M8vHiwKoqP3WRUWHS8AodPouFVnXvaduprRn",
  "key44": "2mZkcxY7ay56BMNJXdAKY1H4rntR94qLijqJhB6F1imRo4zvuHpRA4ezfZn4qPAcZkFjtptNqkPWtyFE7imFNJKE",
  "key45": "4wr7N8GqtSzKVf7muwU2acWjHAXnQGLbFSrt6HFQM94fHzxEkU6jSAQCBo8oRNqbKJcPPKC3FWEw9bMsBJMTGPRr",
  "key46": "2dXv12oe5bkEGCoeJYqLSpjejaer1rNqnJiFeyA4gEJ7ENMh2n9oLeCoFLu4etiCGg2er2LxojyTSrWz3Lec2st"
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