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
    "4vnYKbDjwVUQ2rvYzbPD8ENbwb1Qrzjgsz3Mfe3xBrQhkNc51m7JwaWNoamLeE1tCpANLg8owZzsmgSnYcWrzFd5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8BjFG2ip7Frdy5bsY6akDpJeyWgxmG6VjBojCJ4irmxpizwdnxMY44Ba3y4aHDpituonbYK1NphGbEUyEES2vc",
  "key1": "3BoevpYyHhfTk2QawaUthhTBVN5YckHkWCjEVohqz2w12ghMNzmSgPHKHWHdHje7AmxSmguTii7RMwT2e5DVWhMN",
  "key2": "58pKEcmRY5yma6d6BmJFswkn48GUqRKCVkk7ZeETkE8qKpTsAsBMPY5iZmpBmbXHcdSozm6EQVT4Wt5xCqHpYtZp",
  "key3": "5eMcUy7oXqz5QgabxRTySMQVTGoiQuiqLUG1uXFwpRC9X9cUp2KW9S8s8ecjk9uHSrcdYv1NfeKRE4atvxU4qE87",
  "key4": "49Wwvu91HQCnFstjM2d378khZoqhgg66GoZqrnB5qcozh1c3yFAZrruFCwGAtDoo93693YBwUrtz13wBNkkznKtu",
  "key5": "5JPWKk64JEXpD6krepfecYV5CM6bevntBqofXh6wRmRGqHV316vQ6G8S51MysCx4c6ybc75UAfxVqRHEmPLg9UaH",
  "key6": "4VFyNXKNc9GvpZfb2TpQg4nq3JsQX6nmR11Q9uFZ8FV3hzzcduBU95PTh9LVgEenoZpmWcAv2aq5dgbmEvoAXfC6",
  "key7": "4uemmSHXaAQd2zyQ2qyBktvfyQCozN2zRJRFb1HwjudfUa45RDoEsj3iAE2oT7hWuonpPtPw3f9Y7znxQR2ysynq",
  "key8": "5jrXfVzR7CvSLwqfxEucSdjwZpTzMM6YJs5EehHpMmvwBvnispwMu8mr5fdc7qqHDuAkZhcpMcWBr4xMAANSEEHK",
  "key9": "23A9HrdcFN4CGZCrkGzEoiJK3DpZThZNMjrE7S9otzWHBwFu6zR6YUnNCGmfmNi7GBf7iw397d1DXkz43xoATPJu",
  "key10": "5FnJFD8DmjbrD83srdT9njWtdpyGKopPHLriuh24uthcRordSoDd3V8C7XQuttDUBkagHQJHT4mZfGNUL5y4qV4u",
  "key11": "5nKQMWEp5bW7F1RJUchqBQNerVm8PrMw42WniLxV7ygJXTxPfEgJkFQFhazA7oxLr59KbYqAepQs5tardJLdpLLQ",
  "key12": "5zpuLGPBgr3NM38a8zpqLF9zumGeUQqfM3baG9Runqgq8ALA99xpJfi85sbwNYoQjYwDJKj5CKVCEbBD5b2QygwC",
  "key13": "53mHJR38DVicTWGiki6yF6gHMzbrtkuBy61eXpaBVmRhubmqu57kk5WUr5FvMZkJQ7ja5dvEVzmyiXHbCifXrVy4",
  "key14": "5snUZmZAf7wFsh5fA7cs9YY94gEhLAiHJCE3px19Ujb4XQHucWPBmEK2wroxLqUm8vnG2phbvZjKZKjYEWFvbLcB",
  "key15": "dGb3BFeGhm9w9TNytkXdnwjCxHHNS9qQv3zchPXQ6s7G1XbxPHp9LLyt1bLj5F8AUepxkF6jDVtMwABA7tHqoGn",
  "key16": "2d8j2xKHGxtLdQDPSLbkggXKzeUfv8t4y9sairfQGjyo3briozDKA45rHimQg57CdbXJiyTLiZfcbMcTYArbqZbp",
  "key17": "4tvPsyjfaEYmP39SzCEEs4aY45Fdvv7ZkS3WrxSmrfgmjkWfZLTEUa4Xjk1mVzXz5UFDGrDXofMA8C3uVq5vXqX1",
  "key18": "2Vk7PY245tXaDkpyM5N1Tu7qj9d9hzSrorXVaDNanr7yGRKADh7DX7EhMpQARwe5GGGYRJY2QkVoMCziLG6vU2Gp",
  "key19": "3kBEezYx1xKCqDSmEQZxWYHrKqsuThh6SA1JvYR5S8zJNNyxB16mT7ggJgMot4bv6TtcgLxfWH5jUyVjBHCwRCvs",
  "key20": "DdmwLt6rhtYW26qnJ9Cgqpy2b9oRe7a8Y4aeVw2ZYteF8bCJPcNwV7ZD8TqVVPpE4x1fkz1dcLjjyoXfc8LEecy",
  "key21": "iG8bVpSDbbLKE7oLBzRPJBTVEZ2AT7XkvsP16k8EVb6CiwgGFTdefd5WVuxDzaLa8nTXk4aBPTisp3SoddB7Gcb",
  "key22": "3URQQrrXKyD1PCFc5RgafPAJxqaXsQGFWzM9SYbzKfzjEHdXS1uG8wvhnPbdbfPbyraZ4qaEhD8ezTS1z13ijKDi",
  "key23": "2CH49KafLm6XCkrAidDiYj1V7ex6jb3L8pCFBvHxhwpXbCaC2DtcJZbzbVgRbwN4G1YpLGoiNKJ5BbFNKPZP7vMn",
  "key24": "2phD4h93FTbnaShMUTwk12GGxY9AeWKvP4x37iHXfw7FW5XKewKhjMmSmuAyA8RE15U6YYenWTFCd6RFEGMCUdcM",
  "key25": "5iTx82HQkjLzXFo5PV4WLK6mvRogYKRmUiLrr3Yd4ro6xZ86U7dQaevxiuyGBYHVAnzrwG7MhhHuRj5e2GatvPy7",
  "key26": "3rDPMiARU1FpFe2BzCfktGbhGaARmqwhTngiD8Vp2B9zewaXJMB2v7i2HKvy4ZMAyRUfPazr5ygLhAnPoC7RCkBQ",
  "key27": "4P17VpgFskRPLpKJ3XLQkgjMbDtUZJN7xZaBrW85XJHcFnUKUppLCxEnPL9UzoWVmHTKjD8J3j3n4dfa6yRqgYUg",
  "key28": "5DUcxbZ44HbTXkqBDkNoWx8nmb1Huv2ATfcDShiDuo6YYdNEyogYGkab6Cr6quiW2Cjd7tfnGb48EjMZ76QhDZFV",
  "key29": "58x92Et7jKvoi2QEtMHHitK3ATffAvmusaPiDbk6DR6fhaDr6afNCwt8hmD39rogLuRNgKReFWwq19hJAJCDZ2Ju"
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
