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
    "27xGJJh6pHUQ9b9kTsqG7oUsxQgvE7MMpikzCgqmajrFETMYyycaGvnZfzpv9VbSmVmr4Z9ECLeUbjAAS2dKK1b3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FLJvomGxjBiEiGJabmcvi1EAoGhuV8g5k7Qor8Lh7RNjZWT3Zgo37wer2bNeRypVhpJ1ATgLDd9nQgjVuEWv3Zy",
  "key1": "2gRGFHeYWLmCbrUXJrvz25kydJ232TNaffJXGeFmiZXARNMrJymXmBGqk22HFUYzBJ4YU8graNQ9bRAJm3rbNQpN",
  "key2": "5PK3p7gqAzqDN2qBZTU47iHW5XQgqus7uErASwb2TxCGRLkMNaZJahwSc79a4eWJf79Ur5XkmZSFUX2fVKzGQoSg",
  "key3": "3ZbF3RTXUQCgWUb1bJk564oPu3LhKfPk9ykXy6Y8Q7cnyKMt4UnpFvLCm8Le36DHo5jkuPf1PhpgxcRQtgUHvYef",
  "key4": "3HZ4zXu2kjA8hPQzpHnJFi2kPfU7R7g7GHWvZM4tZWQb7iyyFLusNPWmr7yna313CzTNLiLVaeHd7pw7AM2G4CFd",
  "key5": "5YrhnJKRMEmqXVvBhmHq6KadYo2Mh9D8VfL4Cf1UuUDgmU5hhokCZikiK56CvA7gHsHH9XTnKvtwiLotLSNpRE7s",
  "key6": "2MjUJ19cdQy9bnnECeNgCQNCsfPByQtUFtuFGJoc8NUepkaSrLUMxt1oLS8ufrdYXDmu44GcJhGLkk8FAZwj94aP",
  "key7": "5r3LN8VQa3yV4FXsWGTkX4aJvXaLy4dffAmrQgJnJirBPUbqAQW2C3MTCZx8ofuYE8eWUN2EVVCxLRdW5i3dddgj",
  "key8": "2eeRk3Nfq3nXqyfaUQndJpWThCzCHQwARu9hraiZewgq1djYDsoTAMGPtVvp19K7jJk3xJuADdtnvSndEMktNviy",
  "key9": "5QmrTYcQ2SE9MRHN1aFE5Xj2dycDKsqN2XGAJzviFCKtzCfyVes5gKmoaQeeKZ6YGb8e95wXpkzqnLFfwH6ArmL9",
  "key10": "4m3nXbaQvVHAMtGTmScWHV4FBkmvLr3CnPa6qRt2KF4skBdB6xcTuwMj3LcKLBfJe76rBrrrRj62r8f2kEAa2ou6",
  "key11": "2qJvdCJ8QHoDToC8PvEVauyzoMgVGAChTGCW29YVZoDEmbmC2Jf17syzdaouHvXA8MWH3MiQWg96AhSnaF7kGWLQ",
  "key12": "65T2tYiH6pzFexY38ke9dJGeiU4YPW6FBPKkmq6USpmkwNWv2kXDzLn2i7BwSKRuNjcT25VLAjtDvbvtEJuiSgxv",
  "key13": "2u5hsNSpmtu5wt5YN5GNuwgrrHu3KWjPw8mf7oNQiZ2Sxht8CDC7EsXr8R5dDoEKeGPdA4SLdqgvtPc6mcnroz65",
  "key14": "4rHZb4Hjpr7TXWZbSgQznhcfB28sjh6CPigBujmuS1LozNiFyVo8YbGssfbFLMJhpJmw1px1V5a573yFWwkTsJ7W",
  "key15": "46Rocu2maLqCqFtuNCQ6HqDdQpmcDT3FQDP23h4RqtMCq5SA6STcU79av75xzBKC1sVJkbcnBCwccnttuTcXE79B",
  "key16": "2b3GXXtooTBGfW39fb7saaxJ1RHkeQazV2HkYHsUX8XQ4MKURy6goHFXntcunaTKDbfgYV5ztJMAQfJEiBqAUkzH",
  "key17": "5sL3eRZWHR7fXCZbHZMVcfgSaRx5ZjxxcHN5qQ2TuXsa7BAzkMKyhsM9UeD3FnhBcDgE6sKjKfpyXCizRzZhXSvA",
  "key18": "2Uz75W1mp9kNMmeug2buPendNoS2t1mTxiwCgxBoBQxQBpep9WkHuBSrwCAGUMvmHZRXBLVGc7xWmQNPK4ZNkfzP",
  "key19": "tW5AvpuPdaSoUBGrS7BYbTdY3SaJziEkcYBvi5MWDMY59E7SUjWYjhTmaDc87tkHyy22T6MELVaA1qZaqhYQknD",
  "key20": "fTJk2twyruCVJhibCtEpLAMHn9bmZeHgApCft8LYuWGXmjYxNcGSWVYQ7hsDezjm2dRv7R1154pgebqc7WNeAjk",
  "key21": "2veYCssQttqs8nVLrsivQAJVS1dr2KRj4CQCtaYCkqXEdpgkNaLXRu4kV3CDnBNdiFCdkTz9HkoaPf4oS5pNEfkb",
  "key22": "5NtrLwXAfp2pVpmyWyH6MTnEqpCkHpDQkbxjGMngYpPivFKM4FA3MgUsEuN29YmtSpNiH7L8WoENSK45VeCEUbu6",
  "key23": "41ToPee2RfJ5z2JYyMqBLVA1p9SK3aWw6WMhqkD4i3gw9x4NBkZiqDoDSSez886bDAALtPs8GE1UWCBALpvGNBpf",
  "key24": "53SRjFMmK6tjvGj6F3CL49DFRrxDYk9jDCU4SYohUhG698x9oiZhQbrURjfPwCuLa4RdWnNFBZyZDLVzuJMMAgYh",
  "key25": "5epHdihx3kZg9HfpGwx5j8cftoCe5bWSGurhTc6pqrifVup3zbMShEwdwLB62i5wQhTDTqKjL1ZMGf16YU1ixthX",
  "key26": "3gpEz5tiXBpL9z8z78XhFfdy4suPZrgUWPukrPfFweyr6FKGAAgSGt59jdfGn2PbQNHMR3xq7WTWojPDWMwm3NWj",
  "key27": "45y8F69NcZRM9DNJK3iEQEovn4zw6erbVcUbMAJz5yoB4BTW7dfGiSMdusp7ejf5FZwj5VYP8pQ4XGtrSmwjw1QY"
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
