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
    "3UArCAYHAGUpwkp1DWHFGEasrSYByVgXQMsitKg57QSvhweprjLUMML3aUqdtNvDaPTgutAqCoBhoogDrDB1kZ7n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Tc37RYsFTD59DFVzWZVsHnVsMnbSuVjNcV6SeGtSusEvRb9haupGNdENe3jHTJ88o6NsAttYKcGfwhwp2qb7hyL",
  "key1": "xpq7d5sqQQMjKUTb5YxRTkttiSgHNc18Tu777u6q51NQM7RfjTLKuPt4y56weX2SFaEpZAPWJjx7YWmaNupBWcd",
  "key2": "f8KtnyxUAJ9bVvJhGqm2T1y49LdLnF51W2oPdwJFzT7UhiccrEirRRGUGzwtcrw5RydkkfU73FBuZ3P29Vh1jPD",
  "key3": "2dN3KuGbMKotW9KzUnbMPv6UgMC2EWBEtw6UYbCBPg4f484Fmtv18Ao2CdpWyVS9xwKsFtTgaHkY9kcHWvjcnifA",
  "key4": "4cTsWo8DHahahU46B6U4Pve5JYfPcKJ7hK56REBV4om4AT6pEKetK3GwVF7TsRMr6SKZL6EgRUgnjnA9t5JYi2Y6",
  "key5": "vXhbPzKpRZvF2WYwLAYjJMS4cTSSyEWeACZQEhq3BxyRKbXvn2LhiAsYNToMuC1veBDQm7MWTua9yJnM2z9DoGp",
  "key6": "y2G2fJLq5E9kc1i6mEo3TaLdEsWJWn7TCYTdYfDCpymhcvo7seefcKGbEcRpDumnYfiGobzy2pBjqLKPAnwp8cS",
  "key7": "4C2JvcNGmSn3mEAHiT8r4QLMpGKRM5icNvMKnj8N9Xk2tFcUMDWRnKZMT1fkfKosMiVfT9J11Y95Nv4bK4U6o2CW",
  "key8": "F7zdqvEXJCwmv83M52yVVRoYMw1z6Um36kJy7FFEVDZkz8wYeBkdsTCVgR5XJe7TKrXzmjUCou8StkEegSGTM3K",
  "key9": "36yrZFEP4LMbo8ProhXRpa4cjSyLjQhjHGtB4Q9phJcfwHpKwcCktUthSrSHWN7KBueBps2vnf9kqELR8YqSZtae",
  "key10": "4mXisc2rBYHVmRcQtBF8hDkHgzHe9Q364M1HoJRjNgwBSuALBdCD5SM9XoTnRNo784R9Tyvp32XqPc5U4NVihFto",
  "key11": "521UwRbd6UysXuCcsp93SVEwTXzzE8vHDdGzounjjn2w2G4HBssMNZeAKZNVJtsaYnDkBXN5rvft7HKguqcAuLoi",
  "key12": "5LNP6DSz6sucCCN2xLW5xY4AcpcewWMqidVNhrpu9TXjR1rTdfNz5pK6L9s7LMgDbu6zLwoEnZ7cADGXaBhuRsao",
  "key13": "2nuFpRHFx6FuYdWaip1RRSAh1eJ8vMACVL44H2bYosgNP1MoFvodjwcE6yGRkXWsR6byyQjAp5YGHCDHMJUep9LF",
  "key14": "51pXpzC7HeF89LCsHLYb5vkWu6YAERXFjpUPJxAtfY1HgkbXYWsVXCettLFzNR19czeoxzjiY6mAh3EdNkUUQCqz",
  "key15": "2W4nLYeTUjXchg4kZkP86aBP8F3qyNXvQ6MWbNJ1GqUKdcRpiGmpbbjxwj4QD1fKYWdGnexuDKLzA2Gajz6xZEqv",
  "key16": "HZZNMV7tCaVEDXXuyoQQNqxhN3pMD5i8wie3fdxt86t5kSakSxp8FQP2Nx8Qk22U6Jc5yaZs18exRBEu5D1wRDF",
  "key17": "3qYiAu9YqiPrnL1MUTEmTT3Q7AFsSLprKcHqVXdHGZ1ZBWqMnvoRnUkBWfw2YEdY1GyUoJYgpNiHkkoUyRUW8LAN",
  "key18": "34o7tJqKeW3HYmXsXs26JXAhJKvu45q2hUCymwwfKA7AECNPFVyHdMzGNjhtxwvGzyX8cDrwKQBaGch9sqsjE32B",
  "key19": "3J8czwrj733sApiqXfFtTDYYkxunnLqY4wUvJJ3kfaoJdhNER23xpFtTn91ib9XYeXWZX8eRnz13krFx6JcmFaz4",
  "key20": "4Ee2U3bLBEbdkQWpHczd8B7WfNmBvNnBdcHb3PZrQA8Xyxe4BYhvNHa7V2y5yi5CTuF8EDYbu629BXcizatTWZA1",
  "key21": "7R4g7MyTFGFJWJ4YwnnsG4WMBK66CKcHhxbFUdyVQhjA2CyJs6ZubgafCmnrBtDPrLHWcm33G9qoc2Fv5onbdRz",
  "key22": "3eHVpEqhbiCCnBA3KRKHSbCCkYLawkcb3hVqjvQwhrvNh7bDLKhXiiiHjDabRpasASRG81xinLVSpabHRk8F1Frv",
  "key23": "2u3nuXxzTxfMoANvtJpCyyMAwVgMZNTsmmt2NusRX8Xm8PfjLr4wZJAWeEU4At8M1k72CK227tW58eVcSisX2AH1",
  "key24": "21fWB4wP2RWsiUuK14JNzb2iqGgs1Sgz1MGicLYPVN3tcrWYhegZUHULCDk58B7nz5d1ULJ6BHmWf1Gk2CidECLx",
  "key25": "5JDB7ncHyRMBom6HJACxYtz39XmDhXifXuYJSHiuMUMHKzyqaV2SaaE4wby4uwneRYvabakRtMHFPZBS6i2FYDqN",
  "key26": "3yq8Vyo5AjXcUUsEuZtAcaaLgpySKe5US9b5mwDQTKnF5SkPw2V6yUJmyuk1Zt535s9PM9rwon1taGuXDdTaiFZ6",
  "key27": "fpLjXnb4eNkdimwtNryjYAcdTdwR7DrS2m1d7yiieHVgjcvYo1SZ4E6fk4GACjJXyjunmH4sph1e3yv7eprueoH",
  "key28": "3w5yNS8iaLRgbJX7GumiwZYsxnWDrsBKFyZSi9c264cPho46idxdax9aTqapCABevcjuoKBszw1wKyLgkkx9b9Sb",
  "key29": "2k7KE1TbxuCB1UR45jEwgb1BYPRuSj66SeyNL9dVES1uE8Z6b9cP1umWwwDgi2ZDhm4gCaXGXnXtAzWCTtmnccdP",
  "key30": "4FQX3ZdGdUARGTTEMiWYzh7S4fEFijhUdtBPVQ9KUiG2Ec7teLYHfLokkD5J1X8Taacp1URSxYYL1R8gT73cmDQs",
  "key31": "2VR7wokgUcyYmMEbD43J7uGD5toiSdV31UrnQaeXHBeNvTCArVkGv4zzHLL9AD2Xfj8jmRbXVNvm2zPhNSSuedBi"
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
