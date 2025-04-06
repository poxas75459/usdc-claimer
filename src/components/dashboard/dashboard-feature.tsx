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
    "4haSTzufGq43jYnoTRAh815xrRLzgZW2svkgs5Nt9jKP3RN2adC9S8TLDNYwpcNg4KYtvcsx5FBQ7Xq643LBGFcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3drpmL5S6MhWdvA8oae9phZLPq6U4K8brnrYPxu112AKchyLBgWfSFq1Dqm124sps3L1BAdtzhAx9CGMeLTb8Hsv",
  "key1": "2Pcrv2mqa1f2uHnxWUfKjP4oU3Y5RMCxLPoKm3iMW8wy2qjCE9DGeQ5fUxViVmqZ26ntMqnf4GHAFPMWNUv96zqN",
  "key2": "FjKayEkFCmUwsu6XUL2RQWExYRzKYu2Lte7wSSB4geDXqxYpqPDBDmHNM6b5gnRhLepjriTqz2oErhEwvoQPsy3",
  "key3": "67qtnTLSkv39eW4u9Khd1vxVu334AX9a6eccUNDzQrD38RrTJUij8aNyhSzjjXTiyiFWqFmm9CXmEyFXxB2qqyYQ",
  "key4": "29rKhoL1Xz7nakam8Ffrx4jLxZFVpj8sdf9HBj1t56ReiAKWQfx3PcBLRdYEkPCvWAoBmKiRDRyXxH1hiqKeApnX",
  "key5": "55eMskU3gyToCfAxLYuzKKQArxUcdbKTjMZNYtyd6mpesQ31Vz7BMoxEJJtP2DSBkkZyV54HFHK2bdJxGJDZQd5Y",
  "key6": "5ChY1kYxa3jkjfsN4xWK8DGYhL8QxrREGANypfw69294Y8QrakZBHCV3mpgyLNyd7BuX5ZHPxg4pDrUMoNDXSgux",
  "key7": "4ifpWf83epwK1gCjehek5Fcc5arFFJ73jntJhnRzgzCdvFFVjK3QooFgYNEouefnEf2ZYBnJ7WSFKPfqy5bVL7tj",
  "key8": "25DrZT5r7sDSBhiyiKzUiakKoxs8eDWsbwFPuEkGBAbgVySWV9nvv7QH8a9M8uTXkdLTgSgf9dpJ27R3suuqzvgF",
  "key9": "44HW8EoQKEcCV6rvFLRidVP9vN9Syn9cV5PgjHtoTb941EGfPm2YLswdUTne1vvpXqCYgEcrkhiJFa1P2R35EC2u",
  "key10": "2EzSdibkDzcZH6iFsVF2CDm33LUNaGePeH8dp4rKM1FKad9MPci3m7sS9L8VAmSNzUAuz6hUoSaamUkUzenVNTWP",
  "key11": "2yYhusdrqpJJvcAuiLq2k7Rbpx8byFtgzevB2MgoU61Bzub6qYgUMfGQAibrGke4mtjdUqQYw9tmrnDTzBb5osFq",
  "key12": "4YbNMTpYCTNRs1juMCinwX1bdWU6YuXZ9KPtyNSf1QvZPZQh5T5stvwjqrZwhHRzm2uvo5Err7gQLpuwREy3gHkF",
  "key13": "2CAczzA3hMFQ5NMj5hv5SNgKLujBHdVSszcDJxmvB4AnA5UMsBc5WysE3TUzJ6hBevbNP1yHMyiM4wQcASo79Co3",
  "key14": "2pwpiRAhfRgKYvJorLAJh4gE4SnY98YQcuF6m3fZRPrrfi9jAETx9YuHdWW29BWYotjTucPGiJRMegnmxfnmxcmN",
  "key15": "2Z3AZtd72uAKRcBjojPkffLj78JVw3SonxrEPxehPZvdWZS4wRVW9yCoNRqzXBiJg9uC6HqmA8NLF5xAoiHk8Wau",
  "key16": "2rx4G6BcWTEfd8xuzLyYwWsCMThzVdbSfs9bUnrZoT9CAFLU3xtFSSicQUXqEMw9e5z1UFccAxMKMWM4Dbtd6Axk",
  "key17": "4P7oEeTwHsUV2nDXU4e65ohj3kfAtRHpTZri223CVETvUCYmhK7c4T5ijwzTkcKX6XxYS5tkFyz8d6nAcTJB4dus",
  "key18": "2mEWccLz1KF2tsckzgRagWYhniFkFqiFwGdjddxfHuzJBEGTsywQ7zChPZYDMhbsRgQzheDDbiPdrtGnKtWasqcD",
  "key19": "5awuYJrNGn5nj8WZ4tXdXmqmxLyfePUWfaLrzjKZnyGh2MMdfmgfDoQJ7NsnQDWo9QmeGE12V8ZbMsw9bkQv35ps",
  "key20": "2Vb4Htw691x7TqTSSiinJ5pLaCCKJegwGwyDQv5tqnrSbjZXWmuxhALfDJSjzZ59gonCtpL4D9qUjUmAHsV5tyoY",
  "key21": "2jn6t2agq3aSogWxf9nkfDsQpxbEzh3PBavxNfoeBtYjW7MEL3GZmEYwZNpEZAfMVBJQoEAUDXqxPobou4syjA4m",
  "key22": "4dpAEuTc5YqpdcmyPD1SNJCsCNRj52wtJbVXRQk2qmiQfUbqiF42ekdMG1iuvrsTDpyNJwGFxbimPotH7FhwVV5b",
  "key23": "4Q9V3swGtS26NpgGEPTxMQ9A3MwvYi6bfqboTLXdAjwDaqHFxQJtL1DxP9EdL4M3JHvE72k8GuSxisGkSpxy71BM",
  "key24": "2afbi9LoS2jy7mMNDm5ikYWdMcncW4fQ35kgmGAMovy9SfdQMfPoD5F5y7gsXjfev5t7ZvSArSxMSoseSYnrvE1o",
  "key25": "33aPteTbGLgQW2HZSheB2PLB8cmJbyidDCpAsVFZmJM1PqoCTNFdmGzRkioBq31c8KQ18MphVxnZX3wss9rQz7ca",
  "key26": "75JVWe6XD2DAroQipF49kJerSGmVQUrJdHpH6HRZCRAeLXYeBwGfr14nJ14WsV7iCijM3fJRZdvU1EZKsmnZT2p",
  "key27": "4Ae7nZJR9W7oe7un1ZKCfzQG1NEa8ZEngZgjJkr2Jvg6HCfoU3RBpijSSLVX5ZovAueFuteuj7UBUv8aP2t6pezQ",
  "key28": "4TLA4jHEFeX4H3i3AGzNu6DjanxJUZ2gz7oxWHwoE8mPaS5ZWoQmsS9XZqpy3sMxRR6CLhNqy6P1uL6YBwx5rj9j",
  "key29": "3m8ydnUJ7gbhNuScnvmdDhRpSykoFio5xt6yH1yqhoceqMYCNof41njGf1rXSW1jh7GMyXLUaLYKYaPD3wwe3qrf",
  "key30": "59p94GibzrqZTzDTgU1fuzPvW7UNsPbycMs5fSp8CHEPrPkKbJv3Yft2LJZ6nUShVswsiami9cLG6AKBpLEWrZDh"
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
