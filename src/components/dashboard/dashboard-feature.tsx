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
    "5vaDHVZDxmyGkYygiEwef2jXVPRLQcwTqeEecmH39twu1cmMS7cnApS1DQEntHuu6tvuS5S5Tt1JC1wdJJ4BxJA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tLpnF8frv9Na1XFJtUGzwxoMyX3UYodf3Q23gje46yB1zt6YiKWp6EuY74E3ARiEs7L5EqUrVKK5rZ7avDNbNe4",
  "key1": "zpuPAKSpy8hVM3de8WiPeVb1AhVfwHAJGdxRyKBm2tSsueozwA73QoyYUJbdzghPdLLq2BFynxPcHYJCu3pNK1v",
  "key2": "zpQssbj75aSdYKqXNebXSvugqjc64htFDrVoHBEK16tweaSUtUZncK2VbVaiCBP7G4F3JPHwCdfw3hRpdw5vZTi",
  "key3": "2zmPRnWzWzeKJFqpN1BVWtQMUpSDw7Jw1VT2GG3bAEeEpA4dtz1ewmcZUGeTDbNsS1XmTeAMuqKr7bE9LJi3ZSdk",
  "key4": "DCi9tBr1xewprQy57gFafB9AVekkugZ5A6FoNJkNnpz1DPYPvoweWgjbkxF5BzYpT92mS8HdUx1FUkpwit4WVZQ",
  "key5": "Z1Y9DetCvcRW5d9afLxoXqXuGqY7wvK1mqS21qeVB2xe63hwqUSA59Eh6985WPYhJe5Cx5soBPxXYovH6NYhitc",
  "key6": "3bYAxfzJULk2NGeQRDX84sykTrjZ5aktumpuRN1uxYrvc9ZEKK89XyT9Esf5BrcY9eny5NJUKLAKYpcfBtXdRRp7",
  "key7": "EhkM5u97T78BB16gHda4rWM9FAD5BGHyceLMXadprw4LyMRocfTzbZwU9xQLcqYxWcBZMdxYNJZjsCVFXrNvYK5",
  "key8": "5ijaozmv19r3FMmLLehqrQHzM84fEDL6GdNNXDWRMM8MsWVANQD19wbFmx5QPRWxKXMNd8ThY1yNsgPxRw8iTrvu",
  "key9": "5B7cmt79y9VHGLqxB2fj584b4piEcYDhbCrswDbPoKtyPGsPVKywg8snMUyy881vMSpt2gw49kd9Su6GDD2FsGDr",
  "key10": "2nDT1Q1E1qvEwgwNFXbyq3uTvsFWe7igWp4Kyhj5YL6Ebg9oWQpW7UJUNafLK7PMkow9ZTNAHJgU4AD1cyD18DYG",
  "key11": "5c9BRqbcPVKNdaQRamPyhWLTSbZorNFqtF1oLSTp3JEPC9gD4SMxb6SogPE3PHzT6jHTiEZKWttK8G79pipTpUYV",
  "key12": "4tj2zBamkEXkJ5g8daC4gBTxE9UnrXJDR6dUw8aTj8oCuoi1SXSjzNh71EKupnnKE2wMfnkd8sdaaiLxaFsmmLHY",
  "key13": "5sJCLM2uGKLXBve1Dg1RucpjcF8pSw3KkYemE5qZJu2AZDq8NgHRnVfHDRVBJopwCkgw1NS2uyuMfpLJjdwBrPQ9",
  "key14": "4ZETHSyjxBRJosr2q3K3iph73xd36AxSv3UeBoSQLrhoBu1t5gDFFtzfEqUFrptzm95WJPhcJudNKyTnsuZrjqa",
  "key15": "g3RkKqLPe8iuYctGg3DSZd7PhwPaA91Zq7NvfmQgxmF2tS1CcptcA36qc1MSbgPyH6cZg92P7GAwjtyaJKQLATW",
  "key16": "4wekS14Yqc2FPMtr6VfXHh278FvNoY4tmwFFENs2QgCifDcNixh6V6JTMiVAGR4dqs8wi2jJc2jex4PwRhnHPYBm",
  "key17": "669p1v2gevWqECN3GpfrktKouVpcScp1BL3jYVRrRP7gtLpgRZ1Pk5AquNVJzZXRjYw1T8XArcu9ZM5TgQ5n7j1J",
  "key18": "t9WsAMWJv1gKBFyzsH8FJdfZR6Y1ySDi4NHUiUyny5nofahr7rMQ5752YifB5qMwPgQNRd3r5GZdtoKHXnJ4mLU",
  "key19": "2vm8gnR5mLADadeoB4tnwtihBAfe3hrBcTET192z2HcU972yQbkErShgETPBzgYgbwLw6yD7BDkqhZosH5JR4HZL",
  "key20": "2osieYsn8HoFYtGZEkoJz1S4SdAexZnovbtpfVcCiDHFnpkuKFHNJjhfjKQZM1z713rQU7AWHRqwDPDYSwXfxGQK",
  "key21": "4M3TebXfB9TPxJY3VuGcf7oL6dPkXFWjxr6FTAC26hSwmxhL2fhAAPbFmgt3smad1i5zS8jfhfbd4vBZudTJckh",
  "key22": "hJuBsML8vuevv6VmBG1yTrLwD964NL8pxG9SYAFui2YUmSACe8nzhe7xYJam43H43YbNe9dLkJQUyMcQ8wWZShr",
  "key23": "2Zy2ZD8pEmSn77q7nrfLXBrEv5WD3fTMkqBJp9yjbyaavrUWB8HBSsmsecR8WxSWnNMfh8mpaux28eGDvrCKFHKV",
  "key24": "P2YtftTc2vCgRPAv65qxQQxGgPf77dSR7J7E2X5YmpCkbpgpTFFv3aDVgZ9AAt8q6jjRs3qsF2LXhBmn69NhKwq"
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
