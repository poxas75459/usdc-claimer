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
    "3iuXRiZZHc4EED1Ho3McDPo3YSAkoLRrbi5qb3pxG233Z91GzUUcNw8jpojzHQa4a8XbvibpAGfHk9YnqRp3oziV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CxxCXcKzmitmBJcGxSVLFfjyMm9ifveNzd2HL3Cs4edhjte4o8FEwwRR21URzYh9zJ2wohPB33GHDo1LguoNFup",
  "key1": "4FRdYRwGK9jSvdSCpyXN58sy95VZhptCH9BchFedBdGUYxozEWBdZXEaQb9nNagodQqHFYwh271XnfBTVitud8UQ",
  "key2": "hcrYUmNRpN6wqkJdRuTHKLTftaRVKt38nbRXNUpppxq7b8RZKoiAZ4aWv8Z8ypc8FfPxGqsEAprV8XrkAsArUHM",
  "key3": "3HuvucuP3qT6VHBLNqEqpd4RHafon4GJKtiNJv2GQ55PsufvkukxHaTwpjYew1Amti4XGur7UkniGQgBGrBYXZab",
  "key4": "2WhsB1uSS4facBKZa151d4xGWsypGBLC6gWcadMRoytUTJHtUdM1aHhK8G1m2KZAg4zhdcphbDGTCD5cgETHQ7oy",
  "key5": "2iBzCjoRXcFpoEAAsTvkopQecMShduZUiPPMWo2RBB3UFrEowtBG7t1xv88ARFS9VfFF8WmstrNrZsRQVBo8fsrG",
  "key6": "27gDR28LeLqazjNFgtDpAYHAqBemCuTkkcv4UbiwU5M78ybPH9VvqieMM5AAEk36a65gSFxzx2CnGtdWSycAyNNx",
  "key7": "8GAbhg88whqZXbpRmZgyb158MukALN2sqePBpFPed852PP1BgDfTaQq7DZwk9esBTCpcmpvJDA2zuwQQRFx4BSL",
  "key8": "378PgMvdGRq14XKmTLLPeh49XA8F9a1sn3QQoKhXyrFU3AYzsBciaRDNFKxh8ZiNh8smENr3pCbLyygvXJVe4hVN",
  "key9": "4pFe6aeFok5nvMPPTE4fHcJggvyDRkbzTQGvm7m6icBbSRkAudWFAsdSNV6DkV8qqoNnYyoJvyTEcB2det4kWnVe",
  "key10": "42AKhZY5Tuudj37T3aasZUGG1FKCNniaiZ9eRwaU2tj8pUD7eBc2hoEvZ3P1KXtySDG5kbQytDGA7oQwbxrKXkD6",
  "key11": "3g5zz8QA9f8D9PJtdCmBHaHbLVDK8xpfKekxPjd4RGQGJXH8YbKDnGNJ6g6E1GRPSQqEes9yhp9tCXeCohvAMmY6",
  "key12": "2Nx3Z8WoEPYQAdUu1s7nT1p1RoH2HxveG2fHHPCAxCtJhX1hNGappEUFm5watosrSXKR7Ez1KeYEQQDAVPTa2Lre",
  "key13": "3WjwRtpMX2Mj9JyYA7xUG44XagUc4XgZLphCJhXc3QUgsqhdvZ7dyoUYHMhtTsDjNGAi9DnqcN7cLpTSkmp2roy8",
  "key14": "5tzTmq8bv8oxX1AK9o5b2qPShWDaWXAb8Rd1zp4sFYbTFoUTM21EzSvwNaRptYEoyHU8iYw3qwRXfLf4SbznCHtj",
  "key15": "5FEJEenweGSTH51ugtZKfAuxhQYrBQWZiS9EmCZw1BT8UYCf23Lx2g6nr2KpcTkFBngHrwSdJBUstN9wabvTvuAu",
  "key16": "4EJP2VWdWwfwFpWj3HBEZ87msBebxGRWK3DLbH13pRQUiBRgCnigLat2T8R1LAKNMgwVksMnKUmvuV6dYFc5WPSw",
  "key17": "5PAuX5aY9jPQkoYYsF9M2mzUD3FBL7zHZiz8ni3a4sm1WDiW5WrDNhCKZwAxLfTQP1snYDTKk9khqBsMiVPfooKb",
  "key18": "3XbbqjPyBsUVDNhYs92dadYjpdkH7qX6wpon89ymDWQacaJ6z3gFsLNoXdgAn6derLkZAEwtDbnN1S9Lqv4idFfX",
  "key19": "jYkeGpgUpJsjmbf1qQEDpaTjtwUb9gZnJQYzb8iXnB4ksjERCqSEz5Aiu9qyeNAcQANSY4znE6jgGxFnAy12bGB",
  "key20": "RKHEzo1NF9qcKh4Yyy62Svid5sAkSQyN6wYVccBsiGoU7CbACZFC312ABfZfNtBT4kTAiQoUMg3oKhWHXMCe9qF",
  "key21": "33z3BszggXWQtZVtVHbtz8c9iuLBjah49VQYZRWhaLAxHDH7DWrhwNNm8rCniA6ktG4BG94L9idxBe3MzbmTHkjm",
  "key22": "MDojUEzAYBsGqEdd49NFhv75hiKCWgks4KypGgotERyuqzWJBFLHvLVdbrxbn63LgbrvHrxSpS6pPTgM9N91jtA",
  "key23": "3gatUYqMvsmbASQyp6BNUAFPELEYeabk6Y2JMvj9Scv2ko2CnCGKWeUrUGEvqSHZwypxbui9X9VM4QgxVHCH3wLJ",
  "key24": "3Ki3Exv8ti7YXsKngZNTE1ox3z7UQPhiZu2YtvoTxcPXzkuGodiNrao76LBbJpaFmiaiHY8Rctn2HxVeKoiRDq1z",
  "key25": "ngHmiZWFi8D545KphFmNz4Unmm3Nx9EZKhex2shmL4js1yS2Z7opv5CfbzPrv5GeED2hjYmUJo85Nm7hh2SicW8",
  "key26": "37byDF7uUXp9WRKLyvSvZYQdgYiQQ3eSPRue85LNS5g26nTkBaFi6q4p3KneFRxh7visRvPz3XLrahxYwJvQZHxX",
  "key27": "BnQCNhwkic3x8a2HPpTMDvaC7c7zNip5Di78FTvQ7Bog8qnY1wXj69oLS4B1TKqeCHN8VjEE5BK1xZtzDK3qPrS",
  "key28": "3uq9qWH7YccJpWcgT6nkX6NunLjhzy2mVPEwv4vSUq7JpFDFHbdw1BDh1vxES4ERHivjKEm9R23APQTHSNGhao7n",
  "key29": "4WpK2kB3RzDYVVycMdd5gGy8UC86h8qNxdetp6cY7Ykfc9NyM32LStWj3nVhFTtTNGtNWGAnPVdPZtFXjhyUN8jX",
  "key30": "2B52nLGrey8TzatZa1qDPioiJR9Tek1NnHLXV6mkSaPdyAnYQV5BAvX6WX3wSYNauPK4oMt9xWYdroiatYKDrbuy",
  "key31": "5zRGbNLHEHKYLSaKAofDzFjtQUVx3yDE3FKkU9uFhy1NznXTeHQSeedfF2HE3WozzaarC3v3P7KSjeHeATxQzfSv",
  "key32": "2KWEgkBcsChjh4CVFLpuG4pk3DYjLcWNxsrhLwcUzZAMXxyYeKekvibCXANZYLMQhEGe4fvdw5onRruhAU9hsRXh",
  "key33": "4DXhpXBhQ4EDRZjzjnSsUoNREfkAdJ7Za36qLvEyrr3V5EnDKpKvhyCZDKa6rmB1oGefD6eESc3BzhYBdavAdkcS",
  "key34": "3Jo28GnQbfa1NHwJ7VHCsBW3mTFXP3NFwbMibEiMnpDwrbB8bMH1dbUQNc464tsFV9wEtr43jXr8wTdQUteEiJeR",
  "key35": "46zAcC7hztVxbWBR2pUUYqtVKh9a7Urn5pdHXWf5LesSciTwNTYXTtbeQ1Rv2dP3NypXqKNHckt43sTtWuh1U5B9",
  "key36": "3krgV2M2QqqryEvavMXPgUeRyAL6svpcWEsG7Zirz1P8n3D1iH9HJuuEpcjibCqva2uYZ8dbbVB9iNc64YnjJoWW",
  "key37": "5VnMac4HRuVhR2NZfi9AjgAcfumtoXHVbTtNQuUP814A68xoYfbhUM5S4eXnnUq2onc7VfNE6Ycs5bhtf8frkhLS",
  "key38": "2t8YH3CiRXDSmhePcBNfx1fWG6rkz4cZooLqJ4k2zEvhpivr52uhUMn5mDhPMkuanrBfSujJQS9PgUZxRHDi3azT",
  "key39": "2ErFeoKVmAc74oFjJ8YDfJJd3NABwy4cALvw8dbK4LCT4RbcPzZAUCbTyUref93Jyc5jYy8qz1bHXboYywtXhMR3",
  "key40": "32cEmT6B24hNbSShdsM3Zyk4joT5YcUiPDYxCK63rzjzkiRgt5RwJDTtJwk63VUGw1Grz9HFrWGNzs3py2Nt6wqd",
  "key41": "23DYvQ96tiQVKzuQ5oxarViLtAnWFs9jCmYsqryeyy2t1PZHQhKFLJKybEGBPd1MMbxe4vksafSrxgWQaZCY34Rr",
  "key42": "2YZhTF1GrtPM5FgDWkx3cS6rGbq4CPkTCCXHjXawbdVKSRhRFjSoPDXGHbdbqDcujpmugyQGfQvo5VoirdASPdP1",
  "key43": "67EHfUq9Rod3hqdTJpAbahTodMkrCknrbqacXCvn4hBAQYvwsHd9smCuMydLXbih3hiTTYFA7EYqkcQ4gp4kAJNs",
  "key44": "4jzqbXr3peYpsiYVdwWkyJ1zhmk3KDV5VndzUxinS7Z1xTdD6n9TwHtCCay9WC1JeD6HkGYsgLSPmSpoYkR6rD8B",
  "key45": "4TKqtQi9NjvKJpYSVit1uNhVwZnYg9ZCjBPWBohKMR59Ji9bsWMbezMUSeBjbRpm35EnKDPSWUovJrk7Bz1eSw2X",
  "key46": "48mg7AxEcqyFonix2m7Rca6dJxZ3kjZ77PbrSDTHurqKAVrNxW4ui3GpLmmNrLeUv5n23uFoJrnYzKMWwfPdQwaj",
  "key47": "5vTPWRh3aLY3vshnNDZVA2KNER2rFZ8zKG9Q73qNuK9BZYAin1rT3nmjetXMHzHD69SHQJCcRu8M1mmGiEs17767"
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
