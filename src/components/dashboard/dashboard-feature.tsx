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
    "Hxtnzvmf3372nvG3nk8Fu97BvADiJNbvzJqmsqvmG57YsFRqejZccqZCjkkuCCDjc2mvCqaGsnUonnhGfQdGqeW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ccxVYhdtiECgFKbMirvQ1AeMrBoW4TmyFgtj3sHRB8buzgdGD3nPs94ajqU52g7bHfkeX1gRur79ULqR3vURV85",
  "key1": "42XcFnzdG4mNBeysymT3ntsNYeWPBm5qU2wJXHCnZHTn3e6HMNvMYPeEJSjk1oFKTK8ZwzdQwnUG2PHxwtXX1gKX",
  "key2": "2cTpfkDi2N3zTQTLeeX7vfrTXpPYuJUpLo5opJbLw9bSw8eazFuXzZPkFZVEjVcD4eod1QeRUgvQF2oKVALS71wL",
  "key3": "Cn5qmtjDkMDhBdUPbniCf4njFpp1mjhhFAybc6CMdk17XH4587kQFcxH9Ch4LtjxXXx45emfpiCDDHJLoaiFf8j",
  "key4": "4if9CnRWu4Xosno23tqU4ZnfG2khb3g8Wuz1qnLw815WCDZWKpe9ee3WTZVZmZtxV6xaFQMtSbCL4zbaYTsuP8qw",
  "key5": "cUEF6yRT5nyaC3yYfF49FKWTNHVbq1HLL5xWhBwwFap9QQDDNRkAtU16GY2cNQBw9nKAfW6oVHj9cNy53maEvaR",
  "key6": "3LTb2YjdJgJKupfGjK5mussqmLd6z3ssGdZ8G6iU8GC53WTcEnoWjHsCZkyVp3bm1ZRPeukzbov6rkLsQxCQxke9",
  "key7": "2ryxqz6YJxaQrW4GtURa2yddB7vceFKGzZ5mamNqHyuiaZfKkyoMK4k2f87ZLLRhwDBNQZuSxd6FH3mhuRijuF84",
  "key8": "5dBZoywJLGtLqYAQq2mJGBa7yvnymwTpiGFYGU4MPtbchtR9ydPh3adYjhAhcPXKwatR3ptsQ17tGjjaXPaaeXDm",
  "key9": "JJDzbc2pPF4pgsPALSMNJv3pioAarvYdDfbJV4DD6BtqektxCZaA6sY5WaTpiMo57QJ1gL6CVtVvMpB5gWK14Be",
  "key10": "wffWc9z3ZAx4C9AMxY5o2a1MhioNFu4anv9nBPKqe196QW2eZjQM86hHLmhysBYFzjM8avyA7dwWJRgDRixoTcC",
  "key11": "uzJEGLPQs7MDcmtPR9B9uJsAmeXnN34ES2iSnYA2UhAFDCR2xrUg2VaSf8heTb7CxrcYV1diyQHv5AnRfAKsapz",
  "key12": "4aLgRZJ34HjUiepzeBdQjqVZ7pVR3kFp1VmhYKJqxakhi44YUV4863nzTPvjdqW3Tz1nQgC4R1x32dEaSxGnE525",
  "key13": "b2d37F2hfShJh5tdr8SkXgpqTJX3NFv1KxY4Yim8etWzSBKhy2X5V6PBwa2d9zFPJFxdkZ35f6wnDkGSWooBe3D",
  "key14": "2RiH26jXPrs7fvdhXcHd6HzDTDAYW2Z8FSkkQJYZSaZgsaukuXH96fG2HvTyigzX1adoHk4RvoMAiVZHUry5d74F",
  "key15": "4n6srRnCJgrj8XsWpA6GZTekntFnUSVar6GP3KzvgMx7WJbGpaPAZaXPtEBwrj1e4h4RECtBQyQfXrZoiWtvcmit",
  "key16": "3f4jDLEYoqnQbF5ApHXigsN1DWzpRb3KENbwk6u3yaxCoK5XmRCgLfc4TrvY7WAsCLjsxBBXz9aVLrF9z3RuPNNU",
  "key17": "669F8tttA2ff9yriyVFq5zuPBaVmVM5ney5UNvhKRmPPPqzLepWMHfRF5jJe1d1ENFLnDNmbtSuUQv218bDWysj3",
  "key18": "3sWTBX1XhZ9vH1bTpbjWHZsRyyGZPHCqssJWggyCJd9dHGapDyQi238YzHCi5V1Gf3aZgr9zSYpRtt5YNHb1zjnA",
  "key19": "4pH81JK4Ua6NRmrdP5UzFj2EzJsKnwRzgGhzZ1LZYamYmkDmNQzWDirWfbkBeuqMYLmjKs8wiYsWZekPZw3NZTeJ",
  "key20": "5bdfpJNJMQFA3xpuoVueEXqcL4oSyYmkiWYVTDxoqpEVnM4ALmq2ZB6nuVEJGFdUVjQ7rF4KrfUmVhFttMNCytMB",
  "key21": "3hxcsCaHnu4Zp6cLn1nGnmyv2sErc7x5Q4r5Vkuu4my9tHrZS7Vie1RbebSgTgbgMGLoyfWf5BqxurmJsEATSkZz",
  "key22": "tpNFtUBdJmMDqHHB8SNq72pziFXvq4gu49M1dUDEXkSyQ42pGQKqmMFbLJQBsFcT9HvQonPsEe3Yu4XEQroc3SM",
  "key23": "5KLRrtTE8w2w6tLC5GqGyP2oe2ux3iNgF3ntJxLStTfCCRCkJsjyuFQavfQdupDPbC1h5d6782eiKDddCukKofCL",
  "key24": "3bVRhHchcqfFZmUY67R9KhX2EQMNrC19z6e6kjeUxWBcKHuEEPqYzdeyjawGN6MgbtS2cCv3WpYoXwb3roaLF2Mv",
  "key25": "5kjoQHFogC1MYB82tfz9xrsmsmiq8vqwbFqPGeeYs4xC9RoSyvCDdrGGzhhtB6X2brBj4uZ9NpYrPMjdSC2FZmuF",
  "key26": "q6szhkLvz6jeRWtNsYWBpW38Ge4BLUj8Sryin52QYRpttF1LSozNTmNCS7GokM9xyMjfS3yWxtF2WREJ85XmTM2",
  "key27": "582zM2LgNz4de5WMC8BFcpQNQWuxmQZgvbPpjpM8pAaZtt5zB1WbZJdNfFe4WUQ6KWvBR1VwajA3m4yXkiZmZzxB",
  "key28": "2REvH2T1fmAoSPUuo2SVti3bW5bPTaAQYF53hynwBT2Z3K5nNFZiSv7bLw11LSRajuSu8JSn7EgLBFgeLJXQM2NC",
  "key29": "z1b7mWmXrytNv1yxBZrbnoU1ZAnGQp6VEXJR2MfYjVVCZzB12MxsddaJpLoKb79fcFkdvzur8vRvAWqDrNdxAas",
  "key30": "42h4aHmVMK787SsEWs1PqVD5ET9P1kk6DsGctS5ErYFLevvnWxwT5SHSFnrn6kv3WdjaQ3s1oYgjYV7mWprvzo3k",
  "key31": "48gxyJAJdjrCvGUUkB7GcYZQMEo5Lr9EJZoUxeRWFdTqF3R8m2wjc5GpWUEoYcNYpJQWqJZXM68AMBm89ABounk5",
  "key32": "5PMsRrjwnVsuMnBtNBKysJh5NzWqNwF9EU7QqZHT8mea7Y2PwajKQvcqtXKwhes1rhKrPXEc42DbAEvpLuVKzTWv",
  "key33": "5gpTrikQi5H5fTaStBLPzLbEEUawuvXYVesEoXMRxtPgx6NbezBmaLTRPuJf1yhvLvgNv8KEJH9idAUN6eoecDst",
  "key34": "22MmCAxPke1jBYoy8xVbXA1WtyCdVEMaRbswpV24tXomvcR1AXsaMA8hrrZ8g66oedpPKg7fhhcYnuUwFRteYS6P",
  "key35": "ShKqaHoyQM4TND74iTcsJJTgqKptqCKw4GmSQJPDHtaurcHbiy7xiMu9dHb2QMLdS6RwVyV4JjmtNXG52QFhGjY",
  "key36": "28JUxt2x2GLiYJ1vTjVqQwesw748n4aTiaRHJHDwsE9brG28xd1XF9LfNNceJRpeV6cA8YQaK5J1S8uPiUQEvZ21",
  "key37": "4gPtCDnKhAVQjq1x6BmgdG5F3M5swixEGCqETwChvvJhBw7yRDnihK6e5nRpwB4SGMFQiKJnwrTBgZhsAj5xGV2c",
  "key38": "2N8UrgqBPB9dFDn9hT1d5fCqi5wbF1WsJzd2ktpw5owpSLUbxvmBkBHyyheSYL6xSwWPECL5NWbUTab1MqXMpaKn"
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
