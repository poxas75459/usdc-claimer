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
    "W2VUcXQs8p9wZF1HCp1UpPemWWPng4dPmwqdK9ZDTcfh3CMSehJfEuRJ1rvpqFu9p6PVrVwQQYpdoe6oWHPor2o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zqgZRfu4zT6GezNFGcQZEaHvHKzLZViE3mF3yNCtxJ8SyjFGeEJF5daWrKvuMuqZi3S6rpfhZDz1pm5kEC2REpw",
  "key1": "58VpjJ66hUi8Sv1Ahe5PbKsxQhNzscHMaqTDHRkrdp3JJZMwYjX4JToS5GGE1i759YZApE7xAHCKPWjzEzaX8QrJ",
  "key2": "BySWC5w9P895J3K3JLmdSgHjDeigzPMU953dzq5VF7FrJRD5MQUXdZLJ78fC4qA5S7PuFjT4uDyX9knaVcmpkdM",
  "key3": "3LFrGFzURwTS3W1TKNTe91MrkaLNN9rAubU6C3XQcHWCcTAXhJcrBHnnp5N1n5XSGqG5xuSDNHN7GVtuFksyeWkx",
  "key4": "F66YaC4EgsCJg1vyeqzJZ1sRgNckQwLWp4PBHEGz61MiAmdeYuxrw4h8hJ5fe4EEQqJEGwNNf4VjkSnTmeoFv9y",
  "key5": "UjhczGVVacajAqgSiv4Mt5UGY74xG7LWxhV6Tiyi6yij6KBYPQYqHLwYBigypBNGWzZVDD6tGruGtoetZZ1vjpo",
  "key6": "3sFEK4u8K1ktotoK5FnXT1wPtfPaqtpHHsGRTbZrWSNVqc9Qgau1He3QbAPEJjsvbqjgfFEudXzQcB4nUPHPdevH",
  "key7": "3aohnPRi1x7Wo7gmZZEmQf841jyas3TPvefja3nEcnn6f2DBHeocqgX2nVLCZZuQvw1Rj46CJJdEVcioWuemoWaV",
  "key8": "2kP6e6hSihebL2nTuSqs5FSc7qsscbvv8AAJrMt57Bt6DfnfgEWH1Hy4VgbanxrVizhXDVnfNrPhbyAzmQCapoz6",
  "key9": "3E2rguCcTdJ8mt2RUY6P6qhmqGkF68uwkvSDaAPJvCkmmwqRe85SuJ2gYJWm6eSzcahiZJc83a29DsPgk5bzNfn",
  "key10": "5aPehncnUCKH4akHHpd4uNr1UiKKRg86u3HZzMs2S3pGCN4i1ve9SJPEtdHXoxdxXhYAdapD2TPaxeQunyjXHg9C",
  "key11": "N4QBShrwYQbq9h2cWeo1XXQ1AEvSQX6Bt5ydh4X6Zc8BjmU2Cn7FCLB7nNtqKuA3Cz4oL5obLWv9xBthDrP5ggv",
  "key12": "5Vuz4nKgQj82MHrP2NFjLpaM1XkXiK7CJvG4v5mP7pt4wgXbgGXZijNGdBYxwcWqyksHTqE8MiWBbXtVsnWNxK2h",
  "key13": "5417dx13MrMD7eRnbLvBkDTskVFDE9EpbFDzR2eec2TU54K43d6PLeEaL6m2KNk4wUqMFUwGVNa9LxfNsrcVtL78",
  "key14": "5aBQ1HDfkG5ZqUZKfwZSVFz2pDcopDtWsdGNnj51H9UosiJXDeh5gnuDqPwsyhdaYJqVGqfWpcWnpGuEUuMm3daw",
  "key15": "544Y5kxFs4SyffL5kktATvkEkoyz7z2YaHT8te2gsM1ZdNeqfwF27KhXxBZcQgzLZ42nrCNUp3NpGsEZ2heiABjB",
  "key16": "4LRor835jUEB6A7hXMF9YAnzRzuKSXTrgHiFCCKJXGwhoHYJXuQFZURdnpxp7nwcvi7fKM6BduMoVF8WMPx6XTjX",
  "key17": "5K117X5jZvrJzxNfbB2cMWvbFgCPxqjaK5g4Tm9qcWTwVXerE6g5BxSXh22bZsdfsN48vfvPugmzy5dT6cod7pev",
  "key18": "3QqgeRfCq7i9tLJxpDuXmKyeWoVAAcD8NoVijabsnb6AbySAUFah86m7uvZS6ehVjdWKqMAqZe2A22YfN3fhgwUh",
  "key19": "2tZRYMEYud8xENRmwNScuR958x6nhpRF3Jo1Xbaxc4nR8wnvyF7yFYYTfk6ZFJTTKoV4wrVAK27WyV2d7PveMZLe",
  "key20": "4hQ1TcJH7C44ATf1X7SDVS4Jkb5ZMvZLgbeeThDkk8Ad2yR7Le3LZHQmLWCcWzXyUr8Di8hKX39okWjWhTdxT97m",
  "key21": "4vah8GQkokxpJxzYMvPB9GASLUUri96fiUTVoGho9B9XArp1RH2e4vF5oMHyw9TewTmhVEzSrZH72FEYJJXEpP7g",
  "key22": "3k3Cvq6yD96vtNmfvvBLG4oXnwMfnYEq5aYaQBJQxjyQQbcZSMAd8qHkygdy4nd3zHxUaB9gU2x2r4EHmTRC6J9S",
  "key23": "E85vxim7eXLjAVFRA2C6JTJDQ9Tu588omFraiseLMQLkcWjN49DJtWTpP4KcsTw4emv44gevgCqf19gtXxg6xtp",
  "key24": "4CcNbCzgZyVLx8JhsjRY5cA5SjcZ8MS6d2QrSmqENxfZjU2qSPRVjDJpb9oXdAkLqFJG7CGWj2FSV9SMLBf3z89j",
  "key25": "4JhmzeC5UiNqgWmCvPbdftcSyZoXbjjCKKTsHy5Rvu3o26yYf5E8Sd5pG5KSqrV5RsoHm1VzqGkGAPdEMT2aDixp",
  "key26": "3AndptavNqDRw6EvMdEK5Jo7itzbvjbLR4tecAZo69PjBVoYMVCZZj3xfspZY8FRZ4pn9WZdeV9TMKu3whdQoqVV",
  "key27": "2fx2gXphM9f235t7i485DqgVRoMf5xGyBJYRptEecUz8Wd1Hro7rzvVHTQ4urgxNcXi5oj8CTTf7otDmg3gbnfjZ",
  "key28": "5N8GJqeEGFEpxCZAQCBpbvkDz1FaSiJVs5UC7gBCtKnGAx9y9p1rJunx57qsS37PEMMj2YfkRGCqwaQtrdJJZDAs",
  "key29": "TNpjQyqPvz66t7Y2afxFQwrew6BRhgh2xMsz5DaG6jvWyDwEArc97jVzmHFXdQhGfRut6XjC5hiSRAWSW5kAskm",
  "key30": "2DiGBCz7vtXAAzf2AgYcsKkUd2umBCXqjJX3v4vdx5wYNXPtKzsV5DxyRpVSk3GCNPu1nUG9JYRbTPwuUczuhLPz",
  "key31": "3miXZzEDuihAnqteMGUaxBsxjGdsY1yVdZ4QBBxKS6GLAFvKCHtrAUGiaECswXG1D2dCBaWQGiK58zYhJZDyD6n5"
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
