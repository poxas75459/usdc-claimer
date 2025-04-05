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
    "krqcZBeb1rWu72psdJsVgpGEfCicNMQToa4rPJFfv3x22jXpBD216Fh4NEB86YWfX8WQiSYS9TkuWzvLjwVY5A3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ry5PhzAYhnwZPejMuiy5gRvqXW4PquwkXm64SRcZCHdjYkCxMRQPnffk87755M8EkNS5gMeKgsyJghV8WPYcx6d",
  "key1": "2cQsGMoj9sGKMLWtrnzqaQzdiTba5ch8HVMAHaByWfyV4qm8WmxrGKup2hQhfoEwtejf8qUsE6V1N1xcuKdSkBku",
  "key2": "2oZxNkcx2r5hoCLWJkJNnCdVPr7MUv4wGya6XbVyaPGmgh5LqcC6VMYi3YjLn42iGFZZWD7NSYkR8Z9uSou5iRri",
  "key3": "5qzt8MAw69TZrV16sJmKmatkAx2ATEP5Hsw81ksw7p6Viuak1piKoHxNdd9vooyKHtFTpnXBA3REGAJKG2ehZhyG",
  "key4": "3iCEchewctCdGJhi7FLXTw7mqyTzoYgt2PkcuiKevRRcUMnEReYXGa5GpsmgDWyXKgzHyPgoLwHremKCfHVLSdu6",
  "key5": "55CreMNbcYBV4fkNYnAz2EaT6boMvnx9A18L7S6tZC5MwvSPUg19XKfJ2Ea21bS7CGJhDaXJAMXxTfRq5GNvQqRf",
  "key6": "GWv7jcXVT44XgzyhEFEYND55ifSVXWGDwerNEpXtZXzwxYAQRe2hQTg3AATnnpfZPfXCixpp25JbmL1nQX7qgyx",
  "key7": "61pLk6vrbKKMNtkEoZBLny5w1r2nZSqdpP52yse9EcK73ebrYnctpccAnWrUqWiz8GKAg6CiegwjtUsnEuiz6XQP",
  "key8": "kBH3zwMkfCxspHJyyb2JUCHfGpcGdy3MFXVUZ4NCoVwtrvKFRDH1SskHU4kTo2Ld4QTugm6cLVBdCwcUouMB9h4",
  "key9": "4Aq5Mr723WgWtkHwg2AXNx2VTyx3vvge1AoyuELaEqNEw52ej3ZbRXENZuUDi45E4NwAM4B3jMa7xL5QNZQtQArx",
  "key10": "39uLSnSGUDCi1DnkkSDpQWhPB1booXBM8YNKRQ7LYJw7h3BzXENwLVaqEzEzwU1vCVzgkYXQgSkxYQe32VQ76ZXz",
  "key11": "63WMmrebVeT7jnuLnAWMLG66pFjiNcJFsgh8F2p7ZTcSnw8wKzVvZG2NUM2AJTw66TB3YzqwVPPx17i4w6AJigka",
  "key12": "fqAjrSBDAxJ6bZU6ji4XhqMJxPBbTasEFdwVn4mh8ED7RucETRbzY4tre4CiruAkzHsfaaSz7vNGrrLbBTeckS6",
  "key13": "hAHhSoitMHyHfSvPTVWsvJ47d5nrhiCZyaH5k9s3ZeYEmzxZJx44pFLczsdGxEjspcHmMQKFUTMxNtJgrtwfr9a",
  "key14": "5xzb5dnngKbNiuYYVg8ejkyc75wn6KAPgEnjY3yJavHoDS7NN2MMZibc7Du2xCtPqtrKhSoVF35VbWPoXZqAy6eC",
  "key15": "4FUW2GUspqUqENBJiKUKkojaeNra8VSSqta7Zm2JdezyTcGhY7CLP58XcRzVDk37CthVyocLvDU9QnBTjrFWqmBp",
  "key16": "5oZuFVunfShokEMUzxK8Bv8vuh6qmw9LpL5e49dDkpbvwUAiKPSbSMM1q8pPBb1wLaSxxnXb5cWQHgjtx49GJi2L",
  "key17": "4MGxiDqBuJNe7ceKPuZVyfQfddkgjVPpiFiviAVRcwZMsj7LgB1q8KTGAQa8nmSnwvHR7KC6DbRBtNXgv1ok18SN",
  "key18": "4tbNWCWVSDTY7zaP6qaRGBE2D57kwnyYYoU5FdiHYaiyJV4AeoTgG7U99PA28MXTWcJXp9Cq5fqB1WMQvSZaogYz",
  "key19": "41dPCaMNgPHjuFVpq2yiPHd7Hz5roNa1vF4Lut6w9oUV49wVRimSdp2ap6hWtybgzqtD5bmSemtKLAdJfzpqZedG",
  "key20": "5tXtw7Nj4iFixu97bMwW7TFRya9aDuje2LzxBEe5TcyBYLuvM4nmTCFB3ThC29GnEMRvcUD8JQHoEuWEqw4SyACX",
  "key21": "2idZePsUti1UnCJgkK63uptV6U4NJ3ruiRYuSDbs2NrBxrzqeUwTGAdb9Nj9YCqfGjbqc51GhRBe22PiC4FRdBdm",
  "key22": "2dvrBiyL7iQUn3oQLVjpBj3ELU2hoSwikWdJDyEe84aVkxT2eGqoM7BJwPUsgFYqhY1AsUG73QDw4P8hEYcvFKDd",
  "key23": "7iVKCxg9PSiEorMJgZxizkYGW21f6DeHZYxuwbFgU5zWVCsYqj33rDWAtQ1mQffCHW4d1aiPBU6FNs1eSQxWBNu",
  "key24": "3te3DH96T1V7t1coiYE14cvo2H1Zm7xGji9xHJ6dpVB2ZrQB43WLAtj3gT5UHJSJ3ioSJ5FQWBVc7nsN3DJV1cLw",
  "key25": "2e8UmqZikbgMaSm6pEMADAohLh8pxLYr6Kcr2p9UtM2ViG3GqAp99Q6rPD4tWNcpZtAaBZNExXGFArQpRXHybwJr",
  "key26": "3Qm7AM4co2q6vBbxNjUYKBZ6tDGvC1j525znswnQQpYiwRU8Z8RzxCwDmY9xFjEC1fRWVkvyMSi9g7gC1tFPt7V7",
  "key27": "26uJZ7nsBA4evC6n2CpMH2tyN24mY7fPk4RgH4SYQWvuVNg4hkG7mNAr5UGTahZbjZZD78jsE7c2T4cgpgZpYYxJ",
  "key28": "2oHYKfiUqDy2nPPioqxFbB9keasJykRFmasfJ8Lh6k7ifDHgzPBZYFMsvsFCSHE5srs66GdS4zguDo9YAhxNhsht",
  "key29": "3gNT3HzYdbskp5q4QmAtccmy6YDV3zdLLGn698PLjjcufR8hNLmJtGzvU4muqArZBgTJQPEzPH2LrpqdWUKkrq7",
  "key30": "2hXAKUJn7EWtcf8dfqcjh7wfiLjiuAvrxLEsb3T1iKiXatpxJM3GSwmPNMMPpAFqdEGnUr4KPy9yEUWJAxyF9xzK",
  "key31": "64ZVUQepHpn3zuSYyfzDMc1wQ2qA2b5q7BNZRNynGBUE8RSpAh595FWi6BVFfp6w4mwNWjtyGPGiiAFAtW7gNcKX",
  "key32": "5LAcq5fSXS1JC7dfKG3RYxZNdAzvbmhwd13zsUDrY8yKc3tvwQhBuxeyeAabU9ME74u1xZPSi62wU8sDR9dnjD7D",
  "key33": "63JxH3fjKBZQ926hYDwLBAyDg7dXXJGCReNFwbp8VNB9EHpi6WrvvRhXWwrF8aDVuW32e2XHc62wVC2v3GvUEyDL"
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
