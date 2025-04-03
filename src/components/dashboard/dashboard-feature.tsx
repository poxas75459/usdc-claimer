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
    "5tu24ZvFjZZrQAT5yL3ZkhpyFK3Ryhjikyq9YBFHdPffPKzhZJixgw7GG6S6iYujCbdGTvbUXc3fuPWDTZ7PryfE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g2HA2huKCpqvwkfCprj7NT1ETqb3BwwRvPDerj4sfFa4EpPYwbv9b9cYsN8N9dzBGd196XujB9VHW5CQEL28Dhs",
  "key1": "3ugAwhSrHuPYbpQGK8Qny8NdreEDyXQVgf5wnCwBora5U2zfprjaUdF88qAqWBmgFPHTXpoPTAGJK1hupDwVZnW7",
  "key2": "2YR8ZeC7Gy9VjJqEbCk7vGUowwyn4JEmEUBqXg17kDZaascnapTYbAx8adQktHJDfQRjGjH5CKPYq4qqAbcbgq2o",
  "key3": "2BWDhLwtQYBBZjxiks8WEsLDXDmCxHneHV8ms4hrTZrsTndEzU9EEmpuqux5SnQTPQLn6V7KaU4b6byt8CHFqiVc",
  "key4": "4fsHgtAiqWbAT85Dmnztk4qeZ6HbuZAmRYnWZNnJzFtizuo9NbwiUQT1weSQqqRg7qrH3Zr5xzLUCD8QCotC1H5",
  "key5": "49qvaxkoM5qoVnNHiBegscvr4Z7G8mMLVtat6P2hZR8x4XakNCgobVtBfJtNm8xQNU5bPhL5Wnqtm7ki61EJgk2i",
  "key6": "2qohdiEhuhGNda81rSBhB3oVKJWicepTcEtG4DEueoWbX1t8pKYR86KaeGd7wKsFmbpRynbeZ2uxhKEJ7qDHDukP",
  "key7": "67Xfmna93nD5Cd6Srp9HWk9QdrX86vdAopfek78ZNdXre21ZCj43ZLqyaQWVeoCDfotjdXB96V4qXgFqJ9E2pdTc",
  "key8": "5fgK1sLfDJxjUyZePWrnS4KKwkV8pDzdUt8NnxNLh75uooNzHbubLGqJG2wz11HdJm5bQEwo4G9hssM6jJ3Zid92",
  "key9": "4awJ89pEHZCX8xv8HA27j7S8GiwgeaWY8Lj4wZb3sTp2C6i59GJo1uNTfAN5wyRKixyBhBZd5rGhiwDAPfNAGH1K",
  "key10": "54MAFX5JxSASgP6Ss3APCt7Fn7v3iWrvayMopzdvhbNtF9WG6izRipVqTtBcdvVgN7KdUUpK8J61Rp4471UTVn9S",
  "key11": "2dbWXmabS9YoZjTAo3AGjPdiyss5H3NmGe78xddhfZAzghjWTyhasZLCGSM2d62cYEBF1mAZ9vHDFKD9e2PPwv9C",
  "key12": "5MDrDs3p93yPnRRod5Emw48FpfuLxHAJ98xuEPDQsDRs7idGm7iHELPGNxVnuaH4DBVsz6hrSV9FrUWAQh2iZwm2",
  "key13": "hktD4QHxqe3g76pEQUk9atpLzAYJTraKiptKeKsbzcDnyr5BQSDraehcDM9KUoYoDXYr6AhMnrzEVgM5QEhUGmo",
  "key14": "5ruudvcN8BHePiaKQVKw8jnA1EYujKbjLboU5713Tx8rdNfQGZ1sVh62fxW5Nm3enB4Ku69bFPiUYyh3uwzMNR97",
  "key15": "CMCfSN93CVrFoNtRMC8oMQWcWST8DzcHbWc8HeAQeYsiH4NPgwRuRkjduXWyco5a6oq5mqVtZ2QhfVuu2hghRcW",
  "key16": "2ZMcyebpstKoi2sok3advue3sZJfX4jVGSpiGKbiN2589CNXrziZHeNMk71DW8ApwHS7YBLKviCUYfRNbBZFEivx",
  "key17": "39Gopr8aY5h73D8PTZYeHHAmG9irHE2miju2iu74VuGs5GmJpeK344equ2z7jVwKAKUwYH8GbZNqpWRxAHNdDPhL",
  "key18": "2dn8JYsQUv8hDM6iYJ5iPCeCoacmss8te8vejVLU4oNgaS7ghYTATZxuUm9Eu1woPUxD5rvFeCi8McsgALAyejAf",
  "key19": "3ULPK3SEC59Tf74AQNbBGqvWG9456Bwru3sXcmVBVyze6jWtLctxticTaDoEX9VgrQu7BrwN2fzqUwJvSDz8R2bs",
  "key20": "3wyeXQ2JFFm8HcrNtfoVg5bCZTEGgT9a1PvRFTQi9ehbBhJ9C9uRgJwiVDpAG3jaJ4XjK9yodqmZxx7VeVnRDdLE",
  "key21": "4f2UZXQi2fPcqAGruL1kajiTGwuGFUZ5LSPoRtHfpV4UGZUotMxAovV3Zh5L7SfFmKqhGKibu72vURmYEdVME4F3",
  "key22": "5XCoJwU7T3Ve4VNM1tw5ptiX5JjqTcL8gXjuhRjKni4CBdZr4qRR7tYhKKmodbF1CRzRJ2LiDcZgF7iZwSXcwH6m",
  "key23": "3q2QEZzGJypFZK6cYuAacaVvgY46j3AEXffbS7SZp3tyxhKBsuKpBYMnygPncDA1jZmaFrAz8jqbegHdm4GXGJRm",
  "key24": "gSraV4Q5vmTrVNPobyifJz8f1c8gWPWPrvM89F5UUPYaYb3jS83JNakU7BEMtfmsgJ4J6i9G2tPScvmAWZSXbDM",
  "key25": "MTVHmqf3MhxaSJ1QJeSWZvpPnjJqPWSRREYqHFDLsynHg8dFeoLi1FLR1gBh8DtLnGBekPrUqBzx4NWdbiG8yRY",
  "key26": "5aKs4J6LwDjBjxxgVCXu4jQ4fQkyDFUQaxmRJRFctcGJt3aFbRnHQ2YXV7skSATMP9Z6MQMTwox4Ht2d7CopHW8h",
  "key27": "4ucNwbYLb6Cnb9fwvmjELq1uPvJkGoKBbvMkZ7PdKptaXvo8m9cevTcGTgHiEVyDS59a4quzvVgKTwbaXsBMd3nn",
  "key28": "2NaDVhdrZsArZAP9uFj5sMoTUku1sm6oSpXNtAfstb4E5xfUpAzVsDnCKXXrG8K6e2ZxGFUjw4KJBiAwCZkTGGnX",
  "key29": "xiMEsd5ovnBQQko43UegFecbBzrhNeQJccBBXUrsdpAZ1PzVDr6kxNQWbx2mgGmQuDkXYjtugmTdeQS5kQx8Kee",
  "key30": "4vJMN6raAaodrGiQEAmpQa8tfnKiaPp9CNcz23p5V6ASuzXGwk8tMwfVpBYSKA1G4C5gb5uAR1rzUKMdAJiahzsK",
  "key31": "47p8kzdCbrpAuLVbnkGSNrhUAybpegkmjeLrFf3dMdgUmWTkcymwFotx72521gM3LqKG3f3hCFTsaXoKWJZRveiY",
  "key32": "45ptZxk1nzDBWwkc25GMb1Py1q6xRmRSEJWHSkUCaHPiE78CicaiPCsZgw9NJm9NbQB4NLUfW6vmS7AcFVvemYsF"
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
