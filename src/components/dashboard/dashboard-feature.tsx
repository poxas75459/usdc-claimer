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
    "3eE8xEmiYDjJN9XxcPuEgjcRhKfPBxa3evRk5mrY3diQutvFrqaUsfVeEYNgNe4QmUndNTnP5exVpo5faQzvaVjv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nxDma4bscuoxBpHx2ECRtztshkPu1FRGZBMyJz5EBgDbsvkekSzCoWxmRFANRteyczK2CV5ueF6aCzWha2jbxF9",
  "key1": "3oZpmG6VPJpGwKeWQE1DGzzQWM6XeJXMULHmMxJGkP2qehc7pZ3Li671opGBwWwMFPPjNCMMmvbNtmgjthRP4hds",
  "key2": "AHzPfsUNo3TjvyfSmS9gAVXMe96mnyt1YTou2A9VMgecLXq4m6W81KhjP2yB8EibFWsBmSLCHpSGeUCw74iUFcu",
  "key3": "4bqEK8qGjdocDzFbvQ9p2pCDiZ59UBuDWVka6v2xRYjA2E6fe9BRBF5hnGziT7CDeNzowzuMW8NqidtmPNjyHmpM",
  "key4": "3ki6Xwi4kWFj5fydWiGnsW7oZwKb2YdPVpL4gCS4uzoKF5cZvjAQX6yKcQTGuEsWWyNmvrHkK4xH3TR1aJrKx2YF",
  "key5": "X5nop1bcLev3C6kuxTsdjEftnboiFX3WEDnXxtADXA94MrTCDenR1TSjHJpZnSXK1QRNM7zvjP7uV4m1zpP82Rz",
  "key6": "4jcg6Puzkm5d5tyfBycm6GsWq7QrvHHccVozmmRTRQBTAN7YTbRmQhjq7dtzgvJy2ZSwHReuY8JudBc9Muq1eoZp",
  "key7": "GHnVqutAh6ppyEXvgQK5Pu14Q3TjVoDLcEqPbSZwhUEareww6g5eejWJ6j8qWGcB9QQaKCy9vofMQqxKYcF9EPt",
  "key8": "V6wiHQQXL4t7p8dHXWT7my9nZUZZbP8gZ1JsEz8mFQB2T5xUDjPMUwZWKoYAhmzAw3rj5udPjy3Qm5Aow8zsi4T",
  "key9": "5CLfes5PtDtnDe5HubP6SNURC86HhbnLj2rLNLV4axiEJCbidLWzdYpL1ZKmQ12r6MVkvRPofNvBmQ6iBS75pSyp",
  "key10": "4pEDzgF275jK1eWtL4JNXKFBUNUq6RqhXGw4it7mEv22nAfKimPs2FuCH24HZ3Ri89NhHDQDfjivxALrh2ux9P8u",
  "key11": "2TmCJFHDdtbgxNwMdK9FukobgdhveywjemMSiZbuZ8nigR3ntAX6nvkA7Z72EVs1Vz4iWRZk4KKcVDFwQrnPzdqe",
  "key12": "3KiFvjvSvR1yD4zBH2TyC3ryy45ikrL12PN96yK7YkkmWYK1U6zaZeFaBfGeYxcwZ6EnCgK5HoN1bR4wVPLrBK5d",
  "key13": "ovqJp3DKzkgRXcVg6MdNHqiL1jp4sd7dhPTRVE7WpFvsDeBAzPDimeCXejmWqHS4C699Fq9EhraJwAF2Bwq1bip",
  "key14": "E4A72Qgi6XRF2h6QAPDDryEbtrQ5VkUrCWi4rZWW6n4xsrMouWNUXMMHHLfW7mTy7RAH9uqLCU4d1TiP1j4Q3Nn",
  "key15": "3Nt4oTQ7cz2KRh9LejHmkj36F33h5y5hYHxmZnEsGBJVvEHYTQEiyMb6kyvosnvJ6Q15x9Es6joTfVG6kEHEsPy3",
  "key16": "2NCQtpXRsTv8f4Q55X4aZjJE2op1AhXTj7qLCFmpS1GKtYhSe5ooUjr7Ui5dLPPAAauy2F69QXM2eh5gcaJyys9i",
  "key17": "29inZWLGhLHfgznhGN6yYFYZRgg5ADsXbKk8oaMhPfA7y22oaTgRrtMazwWW9cDLQuFP8gfVcMxzf5cVfh83RRQg",
  "key18": "3kG77pf2kW59rSEKYsXACphqEK6qHS4n4HQa8mnKhKaCgdvPA22NAZbAUVSrTMuFJDTU4hnDKxRXqv12V2B1JuQR",
  "key19": "36VMkSyjiQ69HJS9HeAjyeEH1WHd8u6iKsxRKRb7aj7w7bKKcCuCY53Ru6EjHcvhZHfHXXnp3qWPkQMbPD5uS2LG",
  "key20": "54iWSCsgvv8Dyf35jxGZKkQPPxDAE9F7Yi2CnNSf6D81ztNb71RVRW1m29a9kb9LnHD8hoBSJnkNrfwwF8BdD4jL",
  "key21": "2DphxQwiEC1pPYcwLw87XfqK2axq4s5Z3H5x6bx9NEjBoomiQh7dTdjNzSvnjnHgxcDKzjB15JJ2XeYrMa6NR7FR",
  "key22": "4a6EvAkWxNVkGpsekADHk5Z8gzMydCyuCR7SDbboBboWQyitrQjhtzykgJfXaH1SjRc7faCefvFUu1xtNSC3Xr75",
  "key23": "5rDCb4k8Mm4KC6LM8T62ESvU1ZfWmLUVrJND7CZeBib1ubLz3km8FDaSzGRusbTTfBYzAFyns3N2yo9zXazxnfao",
  "key24": "22QN6d6xxYdLd7vfY9uETT6Skkkpkt6xm2ZK5xWGB8dm5sg8TXCL9EnkPMZmUrUUC4rSZqseeLaMrZKG7iqmuxW7",
  "key25": "2dq8CdCWfhSYxF3BMJvsW8WxqC4mj5D5W1UKpGf3DP8zpWKycciYWQ6jww71MJHMBodEzRDXt1WjaRtniLtUoRR2",
  "key26": "5v7uEE7QgEZBr8Wxv6L3EBJN45HpD9bjZHtH3DgDUkSP7s2H33ZGysQctFYw2Uih5E4h1vwhS52hhJC7r5UttncX",
  "key27": "6395DyMdnUgNzkF85C9BzXfCHr6Mqt7NmQFAtyAdnE1u47wbJyqJDKYDUQALvjeps7UJWobEP2mTqpBgQYnycz8W",
  "key28": "2RwoiEkaMLchWZMKgRzc6wqysk7E8qajphf3uS2RuzyMYYWRDbCXdjNdwcwxC65gUuHy2MiuVnoRM1UB4wbKYSF5",
  "key29": "3esRYKthcchhoUGaRzgNh3h4Nw1rzFX5UrYnW7tpCCQuduTex7Lb5wCKgnVPRGCnD7efgddAEATagt3vQtMAMbRx",
  "key30": "335jiUM7c2PVq7jUtn9J2aqe1wyHGUkZbAp4wLrGyUZFbRjSFz2aPr2hi9LpB7nb4TJa9mDvWXe1EmLLxqyXBvwN",
  "key31": "5jP6Ju36CgttcC9NLMZuAxL77bmWCRRyTNRX38DmZJrZ3PkqqeebqoJUkV3b7hvd19uEpazbPDQT2myP8cnPhXpb",
  "key32": "4yL5pn9Af1WE4UsNo76McUHZMNQCK782uMoouUknFqnHzdRYwgG4GmfJM8SmK9WQ9okLuS397bZwgxg4xb7g97k7",
  "key33": "25seDc93CP9S5JDv3kv49k5UMGQHvRW7rjNPnK4gbfWa48pASH6BWYmvUUBUeESUAWrrTexB87puDLh6G79mwrwv",
  "key34": "vQFSRws9eaJHiFA5SqH7qK2SLCe1fbmPXFjvKKRb7N45qTAPPWFPAc3r6TovUXKBhx7Dy5pGUGqKzFa2hQ2JkjH",
  "key35": "X5ArfLj4aHQtLPr6kXp6WFQL9BEzyoioc7u1BTuHmddFgPX9EQN4T792uzxgCYcShe7PLZCrGiyU1paDv463w4h",
  "key36": "XALiPqJJUrewH3j1R5JQDM9W2EcgwMREg1ohJkQS4GCv7VUjG6f32ysPprqAg5Y1i3vBUJoGnnSgUzuqZasAYy9",
  "key37": "5svF842Kj79NohLokgC91VsCVSvvUNvAmMiPAQrdWWwczbDyH1NMAdfgtkwHupxSapu1tWeYoDxkf9vXYdCvRtGb",
  "key38": "3CRenUaqYvKwyE3i2zk3tKXu7JuhHXqMBip4cabdP1TCEqbMp1hPPbHiLAESYpf11J2pJtGfRvzfAw84KNW3RMLY",
  "key39": "64PQHV7KMcjc4SJUmjBCk1wP9EVbmLho7f3RioRqxeWaNvWQiNwBePiaUQdewQTEjmJY17fUadQxApz5aHnzpykV",
  "key40": "5izpfx33DawNQZRohafoD7uoCf61XA3XcGDY96mWgRQPPXnZFUzZd5qLoVnHc9VSaXMzwcRzRp57MX8gc3b2zdLn",
  "key41": "ArBhLke8Vq1GP7H1huUwteCzHQ8AtvVcQQShb7TfAAiF6Z5ZUuGWQHzx1K3mPigw33eGhjz4wf4b1hdwkANgcvS",
  "key42": "sv5DkzybR156Yf1mZU2KG478KbftdcsBdacVat5TyE2SUT9JHhpmM26dathwWXDALMd3mBKesv4aivBnHcLet66",
  "key43": "mHBmmc3BxX46EProP7UTaUxbDWCAJzP8qzHDajJUDQ3kCMoLFQmfNmnuDmztuPZsNzU9r9D5t6QE2G2YqhFgnHy"
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
