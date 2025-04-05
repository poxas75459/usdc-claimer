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
    "4UeZ3PJPLdojCBJSgY3YHJT34415SHvSk9EVcpwsHbSHM3eibYYGpcggyQ7iYjmNKiXS1kkvd4jWwfQuzeukd81n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tcwt4LtwbTFmsHV4nVD9hWaq7jjbiRGEiXeyUadWaAwywkiuwod6bpAoyQdf8rqTuLJgNJEvmJubwCjtMARmaTd",
  "key1": "45d6aPukkLbmZqwczVtLqq1QxFknToafT3ZPsrKjKsaeMnHQ8d6mEBo9NfdY5V7u9kbmWtvfZZ1QqaiCbdyo52mL",
  "key2": "2qf7aXLn4R3PH8ou9uwF2iT545fiSk97XKqkHiT3vHGF4C1PjzdsWxRajnchQijyWR9bkX9zjsbZ8igTtPp15cqT",
  "key3": "5ePPMW1vmXJserCJSHUhKfnNgyuhLYu9j97eYnACmUALHK8LQ4aAvFreasmwDFthSZi2NFZFeJAEv68BM8HGZb5e",
  "key4": "673iYLCU99N4nx2yaRz9JVfyd3wxHGmpCPSMbBAymg53oX3p4mF3PdCsNieNMqo5uuGbkzWtDNg9HGCiLuwgum1t",
  "key5": "5ng5RQtRDMzDgDAkQbUMP2PyWM7MFWpdRJrgvXEXyMZC6ZEa4SecZr6cD1YVT5Ukb8cPPeX97aTxSXBYzLEt9VPV",
  "key6": "4hcDoRLRUbwhCnxYfABsoAM4p71M96TZf3mxtzoY5n9NDWEj1ditcMcMxrvG2h7pPZbtkHmFBUx3pL6hDRcczpX7",
  "key7": "4xzm2VbnuT8bopEWUsmq1Ech9PMRA4ezpS5vGr57Q6dFP7KcS5mAk7pJGofL5brQqPB4xXb8KpisaKz6h7swutyG",
  "key8": "j1wPvbo8yP3itG8M8zBTd7mQcCxYf3vYrWjX4JM8Dj5kRqdJ3q5NdvQDxQt6Vnu63dNwrusRod2EHNzzzK8US8U",
  "key9": "vn8Nz5NLo5AW44c5V3JArqQeMC4JAryPE6LLQpbaQBXz8hYAXuLcAWDgcFpUCYZ3cAQP7npnhghhMqxkAmxH9xD",
  "key10": "2fJBpDggZLLUhjf6S8a1rdNDouxPdBUSwbbqgxTqv82pNLV5sA5pZh8nyAQ7Zvh6xhDdFUeHzZwGDXkCrimDNyDd",
  "key11": "4yUYkqpN8JsDVggxrzmfEFZDct6RZpvPU3HrrxnJcMeTAD71KQs8LxWg1R8M36toCXGqMBZwfHz5MsVyhjnvN98A",
  "key12": "2ghT1XNRSe7xKgAMp8Ug5PYPGeDGENyEtgip78zHdntuVmqLvEQZ9U4H8qdPAod5kR5Tu2tj2Fc85NsQ4EcHsYA1",
  "key13": "5C8NmBUcjMnCdzQiqRtep8h2h5M9hd2Cfefps2oy9QiTtCD2TYAgXqk6FmQJyfUABUrWEmYaLduawHunRwewSzG4",
  "key14": "DfhP13GEHFUZYZb86oYXfDLnStTL8jPcpeLLMmcKcjVjQ2AzvaWdVxU2upi2YFQBokMYBMbEMmv7UjPnKvQQ4WF",
  "key15": "61GeY1fsivmMaPvQjQP3SbxKtRJ4jEv6C8hUZxhqCrRFsFSVrkidCA3fFhKUYmCkGAFg3cQRe6DnX9mrRLFpTaWk",
  "key16": "66GwdRWxqGHHCYdUaunmQEBKgVPMxeSiC53RfuX71Nn3oaYedogaL7H9mcseB1nbhkmmpRDR8Er1zqzsJ4hd2wy6",
  "key17": "dK5z3XUobQHXXt6yZWsQw4JjR8cLtUyUkKepeg28A9cLNLVxuinMSVL1JRg7DkdtcdgNDcGUBg3vetpby6D9Thp",
  "key18": "5fJLyychxV6XQtzNygD1qKniSiTNi4qA511j9ouqKPcHLVZyohayWSFemqGzd8qoRxYvv83uVVfWSpEiwv9xt9rn",
  "key19": "3MCF7XJnkPqtzkrdZNqdNZMDRpRZyupEjpBxGsxv8268UqzNUJi8CvNDmJTGp4C11gwHBrDQWPvwvCn5GWv3xWG7",
  "key20": "4BNDEtfVfRFCEZVZ3T2SZmS1SEdC17KAq3EqzysYsbsJU8LefTHWeqtpjyDBx7mPMnt4StVvD7RZZyHoRKdnSf29",
  "key21": "28iWzg5f89JHTrqkK3AK8ndEdiYaWPoXg8FwkSYAjptUfiw8xi8DyoPJhcBUyieWn36NryKi9HQCSXACMv64p7So",
  "key22": "3cUkmTJAHdmq1o47SM8c9MQQAR29sZsNkGzdCyUD1ZTbKHGYzHBJEEbcaCRGEmtfQm5ruqkdQrrq5ufryi7iUNtv",
  "key23": "sjQ1nKcvBALGvT8A5qeNrRe3N3FbY5UPiUyesxZH592QeZ3euomogbfcd3FgicRYKkBLTYsNkpVpiVwX4M81VAD",
  "key24": "UAVTR2iyVjBYF7KTXAmp11DjBouqGn5N1bF53ZR6Ww77DvUiQkiQfKWSToVdCDxNQXBpcAsBGT5BdzmFGHRjGwY",
  "key25": "QwEx6PSxyK5V59qfFSTcvazVR1nWEUKgiwH7pz8cADvwS4iB1UDoTh6ToXNpcLTjW2WGgvU93mhb9cVWFYf31qR",
  "key26": "598sNTZFntRRa7dm4VbfgE8Nj7BDJNgvJWFa3eS6XpYoLfgUQ2DdViMykmKGWLefgbsqKbJ3V6qcZ1h3hQwrbEVX",
  "key27": "5mQhPS6Xr2gcHKwPfVoR5umiiBomstKcSFNB6bCL8XGAtw6n4pUwfLQWBrH2Ta553j1qxWB3uXpZjsobvsGVeTmF",
  "key28": "2JfCh4sWpWzYKQcmjeiUQB33vqQ8xkpAPuGLmhC8cbVdkmeu2taGtecEhkvx4nPrQrVhfYHgdkoqCQmsyf9dYk6C",
  "key29": "2ekNDPVrBfzFNJpYhVDioPzF64ehFhQyhjxjS1J5z9vEzWk823nQYRSLuS4ySzAAVSv4AabVMfNr4WM74aaySt9D",
  "key30": "4Qmi8cgPswsBeBQ1JeMxsMncVg5y1wEi6v2xSH8W28PrQEReFALnhwhfv49nD9rVgWzZZCA27jcDsYNYXuamDCcA"
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
