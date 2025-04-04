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
    "4j5L1NMHkBMRhHRQ9TG9zrAUQJZQnDhMiSGym5oJc4Y5wZCdrhVb1PGu7DZhXdXkqEcS9B7gy1bLttrq8d4NFEsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hvfNPKB465NdNwB118JPVsMiVVGKrimQQ5y6EykCq46LZPeTUEgWuckbcCEBrQoUUg3PsSDrHuNUb7EbfrdkGgF",
  "key1": "2XYSAAnoidR1JAXKxK8VEAQSEpViyfSkmvnBTyWviGMpxUAL16gd6kEYKn3cpKQ33QiUeafV19zDpoq67PdMAEvt",
  "key2": "2d9WfQDgDe7pSbf921DpwRH9AhFBoKjvjWkVPn44PgQDAPcwecg6qCDnQkm6BaxYSctmtus6SCTMGfxarYTodt6y",
  "key3": "NL7cigJrQTYzWMcbMj4jEGicXBJJvJgrLEgKjNJtFiDMsn4Ndys3fweh6MFqLiWKuZkXwVTVYVYQTW6ZnvreHj6",
  "key4": "9teNxajXgY5TPRmKYKzASW91UF8ki1dz6RpDuvAKW9Mscg23tAEqtzWvavGD3vHeGRzXZW2hacSMEASaFHQp6e8",
  "key5": "4ex98nLaJPEaiFwZKg7xVRUbDAXjXEjqDNUUeQSPVkuzk2dcFwJebt1Xa9jBrWWLAvHPAPxrDdwTaMXGUhRrsC4v",
  "key6": "5BarDHEzjfRbCBNtWs48SJdViYDNUWQ9jFJgxsBxAcAVRB99SspxAjDZ26k2AQMjaGbYdGvNGAFhXy2k1h9QQkJs",
  "key7": "2JMCx99wihSR6w4VGMPPiNbLrfB65wc1BDqRsokeaNUCh2N9HAQ2X3Ev2Tgx2fDNoudnHLXETTUge2TKgTuesm62",
  "key8": "2MkzxTY9wpaaifFxRGHaaQFyKPMMdHLBNYbcZkbk4SGfxHsRk4c1pLgNNfsQPAGF3ZBr522oeDtAUsEVydhHYo87",
  "key9": "3PSzm5E1JpwuzYCJkCY51Yv6Vi9Ddrmh4Ho83CrLdDSwcdi8Fc1NrtcWKrmAAW9FszAkqN9ENn4PjMG6DTfjJ8QM",
  "key10": "ebEqRFSj823cGLu2eDZKCw2auj3mc9A5u4qwNYRPc8CKBLEuUM12JTkw4M7RwJqBUzat7MkCLf4zFfrGQm6kZZ9",
  "key11": "yZDH7RX1w9UU3jCUs65nKeYnqPG49iDNNtn31K6QYxLxWfsWmHvhGaw4MfZCSMn5tHc9aSq1xvX9TMcRfPGxhfm",
  "key12": "5PDcvyS4CGiCR3iGPFY1MX4fCAue2wfiFQ9fDnCbadEBNQkkJeJVEzBe2PruTsF3zVuMFefutUmTxLj4LMTU7MND",
  "key13": "3XLkZYHBx5ridEGyPi4NrEmyUQTjKm7fxd5G8i7fDSSRWxEoBGRaC3MLGe6E8EzB73DQt8VUssQgSE5tUcRJch17",
  "key14": "5kuKfNrQZDBdga1trvKvQ5CA982izsk7ecvWThKVsdY9MYTPMcUC5YMNkjZ1G7aiPVbS9257ULCqVMaaBCrUiiLS",
  "key15": "2xWDka3foKgyh8dGa4uSgRBmKaqKA1F1xV3563b4TapPJTr4BauFCZHUrEbhxujbtXEqSpssUtVos6fz96sF1iCh",
  "key16": "4C21V8qsybJwfovLvjdGERh48gAUp5GBecyTkZS3xbuExMmmNVhjutSLPQZrJMbhZvHSUCkgxh6yBzzNiAjDNY3Q",
  "key17": "t8qJsRtVBoEtypsV6yZZKNfMXr5k9j56MsVCPCwLQsfzyNWRibmH8bV7cp1VHn6eZ9C58g9Gjm3AzunvrLLcEFD",
  "key18": "5PqVizLxtZ1wT4XvTRfqytCXjVaDAy5dUehJKkR6w9Qiwg63stFsGex7j6Kp6iJ7MCdKRCANcS4jJjrepeWPkqBQ",
  "key19": "2WHsCBhgRCmibeSsA5JxWfNtipK4PYxS7hfbZPt1sqp5eg92Ui1aEdE3tumysa6ZVQNprdEsiPEdzmhguGrj4wpy",
  "key20": "32HgSo2j2fd697sa4b29YBZcZhZAqPesSMzBZZyyFRUsKTLhcdZcWemhkb3THk3i5u9fSG9gWGsWozHDMn6saUjB",
  "key21": "3cXmKtvBofRjrTFp3SMJmVkuinnGwPeubiX2tfnTqCqLeBW1WrWSQmG4kJSdRHxNeitH91T6K5erUYvT8wuG7Uw3",
  "key22": "2Q4rXMEUTSoQJmPgGBkWufKcarXAeH84fQsXwYeF1QEGb2kxCR6Ks5Lthip5bvnyACQQ1ytfgQJuhHXDfuiTjFj4",
  "key23": "h9TRHEY7CMYWKQFmjj7zF9MMjzmEMbWMRjRPTaidsTf1KLbDyVZnrJwZnmEHatK3suyUtjqPCmvkp77NxzZvrL9",
  "key24": "2CttmLShbn4v3tLmkxD4eVtWN4QZtbim6zHZLDWVoNRGDbPdy8EMx2BS8vYv6bMA5UaVB4eHzDsd3kEusytftEUA",
  "key25": "kMyEUY225dPSHMTAfTKdMcxM59gqiba4SuJKvbQWdV1WsyqjD1tBruYZE95BUZvHmo4NSDFjrRVehbKDUHqMsaP",
  "key26": "2qAgZP9wUDfC9RJSnYymYSkMmEbbHruVJdRZ9a79iben4ZhZ8B8SXXknWjWv8tjG5rU5tSzLurAYc1ZpEu5S1jdE",
  "key27": "quMaSP96zKmxsskouh1ogFNFGfTSiCSwRiXLiQkWXThf2cN9HvN1CsFE1dCURTcKi8MchFrN3ZdQf7V2UUsJNmi",
  "key28": "5dbi6xsd76adLXF5XCjqT45jiY2bcNR1ea497zFXJe7iQeoGA5hAKopEaE7tE1mZArQQbPEK6oGtnSxwDgYbAEb1",
  "key29": "4w8xCmnEva2v76axuNKoPkneaV7q8nzGttJ2fbJLXcSWzmFzxNLJqZXTSDTRmyS1kJSzqaQQhyGrZSXypWpPW3Qr"
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
