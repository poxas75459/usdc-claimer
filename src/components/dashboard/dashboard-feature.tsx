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
    "4Xw4zqzHrnrzSt7ai7MPg2fQHGYbiHDehe6U9KZ5xCnv6ZGpGnMwqURZafd1phwm88dsXSUqMFisamugLh1hN2mz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hCpBiJuoJuPPFDMDREykdSwqoGSUSVrt5h8FHQxm4heDxU25QUCj9g7HhKQT6uNryxAohiLQ35wdGxjWYm1SpjU",
  "key1": "457LK1ESuXnEzVVHEyKmj3MrZU5xqsCCNxRoTaUDPtmRBvgsvEh4dRrbLJGNRSKzoTuxbbdzz81QSumSvQV3Kapr",
  "key2": "2J8SZWKZQ8WFm7CQsjDGJGTY9GA2hVvKMzV38SCSfp34cQznafiwqb4rVcVgmC3cj6eZ5VZiWKY2zYkAzvbv7ZcC",
  "key3": "21t7God6ZrpSwi4kQzU5e62sZYRmw11ZmyrwDVpykKHGkVjWNz4t9mPqKhUa5Qr9GD8stM1XoMA3yAwDY73raPMj",
  "key4": "3bCq1YmKoK67Jm6CaMFP8QueJjWZmHnvfjkuMt1uNhS9NKq5c6AnGxrx9fBQ8WerLj4MqWnutNUo23kbhC3xuWdG",
  "key5": "4fmBLM7Ltm38vzjPTrEM9jabLUPpjCSh7TME3NhRCUXLL1Me1S5hbjxtcdCb3C91PAzwckEewSJA79uutsSWNvEr",
  "key6": "9Gvhf9vU5N9bw7anoUWsBYzem1GRx86CYfbkJoqDw5y2mK9kXpzBZPS7TVnty4SnGVa6JNCvcRgzVRTAxru78cN",
  "key7": "3tLCFd7ASSaSWYQGpyMUnd2z4smqAGkBuJ8cxb8Jryqaq41vnqsJzDHSCWMLfiQCLCDjFAcmA446JpxzLAYnhpCi",
  "key8": "4T4aSZq6pwHu4cDSmniVQah8AbQ8DrVyvVLKcRTkqRPTwLbqVWf5xZ1H1NyGYvZB6yc1pjQDMB3ovTL8WWpkfySy",
  "key9": "VwgqkkfWsWZknUHh8vvPujrVxbQmFR5V3Wj3SNQkiaArkyaQkNDXuTHMeom26zw5TqUuntUc8KBBYQByCduxg3s",
  "key10": "46dNq4iWBbAnxUpQNHvs6egfiWRzwKH7uPYfJJUzwVpvs5n9xaYsyHKcu1jxKBQM5Hj9MffHwF9KmQny84W5jfLL",
  "key11": "3zH2KWXQE1yykG2LETSPdHvgoxExXQeAX5SU6e3fm48CdTVBau9a8dZE2eVxbYsjX12asfW8ra77hAnvWHXxF946",
  "key12": "61P4YUFuWS9Ri6ENXqfVbJfTdXiiSBAnNg5SPmqbj7RTA33KznazhJn33awm4fubsuNokF6SxSbH7ccLBMdrF1GG",
  "key13": "4W6W3e5wtATEtg3hdP86Th7WgzMCBbBexnYa4Yk8XTAagcHqNvFhiZAKgZRX9rDVuCEx32JhNbiBJoSexUHTX5PS",
  "key14": "5pnvHCDXviFHyUSLVxrk9r2p4PRckGgvRz8b3HosfD4JzeAteca36kG9gMwUwvTWk99aH3ZJQhk846YVostfDqqP",
  "key15": "3eXwPezGYYK4jjECiaq7VCqhsNKBL1FV2Y6hBez9QgTfgTu9Q513DVhvK56P39zGZgxVwC7Yh4p8NA4FaeybiU5w",
  "key16": "59vuVm3yj76d9eS97mJtJGcTa632PDFSXC3mhTTrtf59zVD74kqTmTDNDSgp2n95dpvGTBNTD153LjfN7tHJXDtV",
  "key17": "2ozKzgHaLTCcUj5AboC9kUFhVXYJpEE86zKbnkqfwpQ6cvEZEc4k6ZopUcFEeFJfwxM2PydPr76XDeJyHu3V6Pa8",
  "key18": "3gqwW7pFZegPiMJPRbGzCPMGaZUR7jc8xkg5u3BHks4AJoDRq87weGGHMBkNv7i4uPHrVPvzbKX7UdC8KbHoDX3r",
  "key19": "2TjL869raCe5jW8HX14pgUoH71FA72jXeyMNEnHztP89ZzByk9UcrTRqUgrTRdkXSnoUpeKRU8itcxebznLbsDqU",
  "key20": "5yiaUtmLkG8SdGXBDbdZew19Zxi765yJjUvB5W2BwBwV88GN24uwy4LzPC6dTP6CAz6LvVZ2iQHWDemwSb4GZLJW",
  "key21": "4o3Z16KSzXEH27zd6zeSR1kD5JcPR58dL48TDcH665q6fkNWA6rCc3eB1Ki3psY5KeMH8hFL47iFKf91wkT9tCZQ",
  "key22": "2YWd8HrYZbZp4ShGj2WdscAp2XnobknGmdoLP9mreJ72aEKKdoGG1981VXkYHaA3CiznwDatVma1bbQbd8R7PFQH",
  "key23": "5bh6iJHprE17PFHuAN9sucwyWMnNs6Zo2cfB5QtpCUF7GGvV85pJ9W1hh5P2ogD5XCYKWsWJuJnD2B3SnjhMXme6",
  "key24": "5sUSpeiFM9YdaPPAP392h6EXZFaefTwguZUytc81M8tE9YrYtihohHz6Xq1QvXe5zMk7X8gJW4W5tLgLHn61Yupd",
  "key25": "2bqRABq6UMhBeaVJ62tS7xGjaYyMUWCnjB1GFLXf4haXneTKS662xEfYz4qPbWndWVdaLh7MrrkHaLYcawtuNL1o",
  "key26": "22X5YNnrtqjJeNWBksJbh777uRWQfFVmMWiDodXeVTYJkRvVq2bSz7HpAvNttNRAKDpTkLbT1vmLXdqo2aM7kt7c",
  "key27": "5zzhVzeAyKgHg67cqWrmwUg7yNuXo9xjcHcE2mydn7S3RLQkWQFtqZyALHPuKJNQknXfJMdh4MTsK5fS9fijCYad",
  "key28": "KZFfGgjJkTAHeMm8aYyU9c9DexJ1BzoLsyYcdnz36Zp1i2HBDP95k8hF87gwV18vBvWXjEgHvWrtfJtGffmxee5"
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
