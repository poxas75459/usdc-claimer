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
    "5vhHLEo1u2E4WAERLzmx5EVfL6dUd2iAFkkvmNCtqQKegMoFSb8Mf9AaN27u2Zn7oh6VBUMKuiXiCtwA3doSbMt2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dGrf18jKpWHJyDALPNwPfG1PM9CVM29f62A2KhofPUYxnBdtTyz26yVJLBFsbQiCk78km8wGN2T49aTMa48tAjD",
  "key1": "5fUjFTRTnvJfnJjYswuwXAc2Gs2aDCBQ5Jsknq53S1uJudvHr9muF8A631R1HmQnq3nMmTDq8uL2me2JDqCq7qTt",
  "key2": "4HHB9wU2ejkRSREEvjNk8auS88xiJdnFJ2RjHPhd8HSs4JCmwjUcuoAoLmWDUhNkGVwMeBLKQy9AaFxQmw3RUrpR",
  "key3": "2wci1FZeDU5CjWLHQfk25Rsgyoyxif6TD6Qt51NAsPrYrYPc6CE41jgzDsChCt2uipdqAwqD6Y4uPFpRmcWKhkgG",
  "key4": "5XbBMbUGWMv1j32VuMUX1qvptHzuJpU1HsQBgZ7na6nhdzR8Gx6vKbfrkVAAvh1ez7NgFJV85L6stzkyxnmeccpc",
  "key5": "2prPJgGt5WWBuvPupbLphAFbABapXKqjEPGv29PsFuj4Gx2ARduLeW2TTFNrY1mzWkKXiDbPfDMgX99ZTKT5RhPf",
  "key6": "mc9NcMy8C996ZHH3EVwZmBLWGn9oFvDZVLkq8KrGQ6qKb4XEfxRyTTQWoYdxS2vpZjVm2jEkB2MUSnpmrEfvNrB",
  "key7": "kzr78BmCComLDhRkByanXovzvKKuSqceMtP2L81dJwfDi2zXZDnrxVhCdJMBh4rApH1EN3BZ1oVDAQqNPZH4RSH",
  "key8": "3UnAofJqBaX6ze7668cJt3pMLP3By8ymWBfXRNpCg4enqNqsVmzsbevMaCeKSEThy4z5qMNRFeLXNsAKXGCZGG3o",
  "key9": "4jYo3kV6LLnLLjJ4StryhnWMS1oeCDYcHsAPEDCWdcUozK45uAYUvEi8Ebang6N65kC6bmdn4WLDCfLEeh8vHzPL",
  "key10": "5qmQqomFJghdz6UE9vwHfd98ejRcma88aQxRUDKoYwGXVwpaWUFnPkTogoYnRY4PyHyLxgDj12zQTSermFxBuQQ5",
  "key11": "2sgGUEid3ciCAyAheSFo3jq2zRwYH1BmUzbs3NrpsWXHVBZUXK5Pf7PJHNX5dCiSPkFdKQdeyiMDdArVRn2fRCCk",
  "key12": "yQCPfzpAauVYJPrbGCvyCDMRMYv3sNjTb4Yq9VdHrnaCwL2HaKsoLaM1syYT3cVGKzBTRKjxsJPKJ4ggoAtvc6t",
  "key13": "5LjfRjCKFQgCnkwoSrneXc9XDR2gDveVFNVLW291tXSxPwVBEj1fTySdSnBdmBJW1638SZqGArWTo9XphN5F8g5Q",
  "key14": "5cS1HxEKJ5eDRoJxty2rL8BF8DazbrqVA8ozsdtJnCXTf3QmSjKgcHiJvznJwfxbm1UNebLRBLEqXCLQGeo6Yc4X",
  "key15": "3W6q2haePzSKtYExwEHPhiTuZPJPAyWKT5DKYeqdV3qY2m88S878kFRCuRAJTFvuVkvWB1X6sBC5pgeGHWt9se3G",
  "key16": "5ZoJJj4kTcbY6Fgtat6gSzHBQYTz1fsCPf6owAJ37jwrtVWneyjZ53svWviftmVUnHoJhrX4catZcpcAGjTwQPXJ",
  "key17": "qsdaGxHkiFPvUr8U5CmPpT3dqeBbd6PpaJxsP55HJij8dUw8eHrGTpLrR24knUGB2aPFqXEL87jfhBVkHN6LVjM",
  "key18": "4hHMnNKpDhzkfW72us4fwb8y8kjVyaLepXWrjnbHJoEK6ZkC8YmYQdLaaM1WvSZsDqswvZHpr6z23P2Pd6Lwbbsy",
  "key19": "3ykuY7xFcWV23Ptis2gqfTRo5EUmY5gvtfS2csP3MTisGfSqZxt1EMp7zEUffnatCoyywYcR4jFEg4o9WJyW4kLm",
  "key20": "4Nh4mzPQGmpiGXQDAtnj6QPUvVgifaqxkyxFmuZ53EMpC5nUqU9AzogcEvvtfroTignJiJ8vXiVHHWDzL2u739o9",
  "key21": "4tZzwqEnC7RUXwuFENwxn6icSRAUgD8LfEH4kyPBRbhahbfLdLab9Su7Lv1rzpZ3aefQjwXUHociUnp4JXKWbRKA",
  "key22": "3XQoZJQfqN1r3GY3mYgPezESWCYeiShQmnEbGbpLArE7L4EgDpVAzwNi3VCsyWAeHEGV4ddhFTYUnzit9aKzj3Km",
  "key23": "3xN78mF6tFyb4HeVAxiAhi937A8eQpNvPKnKQ11QK48EAY1xLfuqtdoS5Ho7iRVPDZjcyNznDxbuMKFiooP95JT1",
  "key24": "4fYsv8Hmt4zf99eh2fWuEZ24coNyDPL7JSqibGhSt7FvdGkNqWUf4spEVdNVipJzXbRrTRRsubJNsqvFgZsHBZGL",
  "key25": "uFCTkRqoK36ynRFR57HNmNou8NYWQMvPPpHx4pTqAtkGEUCwhd81ZKHn59wbJrrd2DQbraWCLZLoh8sYaTMk35B",
  "key26": "SCbsKi3w4nTEpAEyCzbAutb8XZArx4GRugymCYD9CMVALX7CfoaYtTRSPdike2pnQirui5eaZFBFkwJpZGZFZcL",
  "key27": "NGnTPA2cGFAiavRWZL3VpWqEDg97GegLsiphdpJ1GBbmQQ4JaiLYWBX4LhRdo6d69L8feWw8BnuiuPmSaUaY6ZV",
  "key28": "mLZkaLAhWKWEZX6LgmBRcETdvUEmUMnoKwGyqGtsFBCHkDLQfCW5dgTm1FE5EsUNtCbaNk5tDv6gtu4TtiwDG9a",
  "key29": "2J6jfWWVUoyxs5J6aMg2J8WxEN1cu323gr9Vdk1rHZpDucCFTm78mRAkJzBtLBoEvsJ86ooStGoFfeSEbGvWRxsf",
  "key30": "HPR4s8ZTzGxAbg7rLCmF1PzMoPBzUK6dZpJ8zgwDRGXzJSN8zasE2p5e5HvV59QZviY7okDoSwVtEWbCsLWD2rD",
  "key31": "2JP2noDgLWLW6Y1unHeTMGnmr13GuAwfVNFpswMF6W4QS4qAnXPCe2uJWCgbpbG2vnY2b6yFYLnWbTwMzoyHuxcZ",
  "key32": "2W52sLiKBVtCzUvazHGeoVi4Ygo6hoRFrTTTUyMEc3G8e4puNm3nrChY2Nt72ATWwAoxCKH6NB5A6dyNw6U3qVVX",
  "key33": "2KCDdRerDD1Ryq7DfYwSiyGgKPNmU52bqVJp451aDyVEMYZgatCvStEyPsg92LvqYdoYHW2hzf12fpWgZ7EW61hd",
  "key34": "48DtQ3ro82DuBgZ7VMBgGxQuqKkhxSYye4njaYYcymJe9mSUKnvfowpB8gig3XnHMi6Uuadv4ounh9S6zU3SwTjU",
  "key35": "2NMRYx4F3RpTEiQEUp9P1dudBozgfugabkq9n7khqmacehApGYH3TDWjSHDEUpWgAoZ3SFVxF51uBNgChj8NohBi",
  "key36": "3qqGAAv1HExV4Au76iRm67Rnpyad145T1oosGQV5b3ZE2dxHnQam1fLn76Qy6EN5ZugUetdn62voXbesVf8gCrfP",
  "key37": "21xxANcn1bG5qbaZiYJtZBtH3ssod7m1sSfWUd5oGYnaKYC1V9PXSL1ZMgBMVQVsZ5Z6TrMdT7PYwYWogABLahrs",
  "key38": "22ZcWd6DEc2dgrzT4bt1BXVyj1SRZ1Q9pE8Fqv9SYruvkp7V2SkzZHxwW4NAerGQAjLA3v3zWPxipodigDAfUkkC",
  "key39": "3Q9oEZm37pTxdhxnAAsTbud4K7dRKeocsE8Hy56461jkbQrVUVfSUJtL1UPTsbRRcKkrwoMANHCVYMd7NgChtYgN",
  "key40": "2kNT47DgNSjiVUZDkAzQnGWZZhiKCJm1ig371rQgjRkXcQ8iHAJAZXqJurS7Xp9NXRCg4Y8ictEiQ1CZZkFpSkoe",
  "key41": "3E2YeBxJoxURttEFgUqZNnvuKxN1LWjooyymYBed8jEUJd6eEn2QVCqQQpBwh5f8Vr2dudWazm9dtq69f416vyzh"
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
