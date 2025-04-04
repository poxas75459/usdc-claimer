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
    "4bCqVkoRiqZW4cbpgr4QVbnWpZaz1tTUyTwzweA2DvpuwARQXEG86Bk9YKfZCocHG5k8iDzMLKPMcT3TiJ7skQCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gJL39eVLsz3aaV9KeUZDzGH5GxVGwmYeEQTMA45dzHVy9CYg8Tq7DLDYEY2yuDNMBZAoX74hFunFFtcNDjzbZwv",
  "key1": "5sfNYFEEbQ2mLhwpTkDfrwa2ZRcpRazxoTHNXqhebaXEgwy3DjZu2C5SRfhuVCyWWDo6HpbioAqt1oMza3Fa2AMg",
  "key2": "5qMS99KeQ198inMdNcu9rQxKuskHLZJ5Eq8FwZ34SYCDEsiJWGDzUZD39CAsYkA1CCUwSEm58371AF92K8BEZL73",
  "key3": "4BJwgvbmbVZ6gSHTiNEsUaQHfTMet8BbKJeMsjKfNNzgCdUf6RVxi5DhCi9DyZqnxRHwC8sknhfqnGCEVYWubjUr",
  "key4": "hSCgSuwqLn6czSAjsYnjMqoV3XZ9dwuJeGsJNZZRYxRGGGPcV7D8pb7FFXxwk5PuR61WUt2aSaMZUpNtyLkbcnK",
  "key5": "3eQkuRrNFiKBb82kxvFaMYFcit2BEFeqtyU79DLY9G7Kk7d2xUnanxuLa32hvL6ZJ92LgU62kxzwTPojB4osfrWK",
  "key6": "5SzZjgvkkp39pLRwQ418Uk6EmnH5bhjn9Z6L4Dur6TVCsyAJnbSJGn9htbwHVymj9Bs6zSz6v1s7v755MqPzubvp",
  "key7": "4zJ4dzjhBkJMU2xwKb4aMcJPcMmARniqBLNHyP1HrbeKFkufR3FgqFbTmzrVivSFFnNBfFa4nSZHMe27rbRuxdoj",
  "key8": "374MU6foR5L6RsbicNQ8Zr5Zqsfi3xZaSqpcBeB1NLPUanN8475zvJjQztxFS7ubdxUud9zwHHpsH52WZqEkyDPi",
  "key9": "5qWBVpFBJ4t9GxPHyLhUBSHndjKiLaHi6pGG5BFFJ44bhaLN6NtSM2raepM3Dvs3ZuuYyW96kHbdLGZyG2r8irYL",
  "key10": "4EEf7zowdwJMTihBE7niYHDqqjHevzxtHdGdjgw5iA1kspoyey6woCpt7TDVtgQ1SifgK8drHwNKaqGgbBv89qzo",
  "key11": "4QjGF1EM5fGM4DC6fEV4Bp5wnpLLTUzsGscHQu4LTAcoiNqknLcncsW2bbMvsPEDDwEMmz5ZfDg9Pp1AbKVxwrJM",
  "key12": "JNdWKTATaRYHoc1DjEdrM1g2C4Ea6xLvDTnLr4B6nj4kQrk6Rjs3VXzxG7RUALDthcMhyzUzyJMnCA4nS4jjPFd",
  "key13": "4sW7tBMVyahuS59z3uHBJ5cqQTiMu1e2ahyuCh1eoCecbXY1s5KBRqj2DyZ8cLoNtXqWHHn8Fw7hQo4ZtByMDQR5",
  "key14": "5Z2TB9UvNYPY5oAL7FHC9Uv1QsJHiQv8Aizbb2THYYrYePnV3DmZtoM3PP8xDTDBsUcnhr5MocwjnFZiCp3kbbHB",
  "key15": "449urAMCpLM88F5KkhnYh3yG1vqC5xLg95b28axZxHfX7cvoYWAE9KpZPgvvXCyQoMyAcVyh3EQ9pqoBcozQgZ2e",
  "key16": "YyPqENDj19AtgAzE7STTdhEA7TbNTHaZAV37iCDbLsijG6uip4EEb9eWUtjgoWquYKc7ocGfhHkHbfsF8H7TTd2",
  "key17": "2RtWJEwrqTsj7HnBd3NHtoRj4ZeHKATv48tmGEMxc8FsGYijfhMYgLLkHDRymx77Q59D8wtcYaN9vNc5FvfKaarg",
  "key18": "4eY21cXfESW3CabBe9PS29PtMt6QQcyemTUur1nFu8Y13VWgAamCGASCcTgqE3HY37f7teHvnfeFH8ak9ZHKzRUb",
  "key19": "59v2q6MPkJMpSZcQtLBToQi9Ke4dr35TQDW6FuG1UgZgxfaZT7LV9rWy6H9toe9b9YossqMeFAQJu7GwpWkbxQY6",
  "key20": "4avECuTnnw75E1yBhLSDtsRJJoeJyzVeKfLN3ozXGCo6TYthJb2j6xjaGgnHqEisPDGikejF1uqR6CTnjysMDYWK",
  "key21": "4eweWtTVifirbb6igb6igLdKu3ir1uzhForZx9dVhGyCoea7kUg3grbaQLd4vD8CqqnyTB7KhnEnzRbQyofzkV28",
  "key22": "GFuuzLHjDH1VrH9kdpSonrRPPigqSPDSuy2atYWk5VGQkMGqcJ3BB4AmTD4vji3LqBgFbpgAdGQLhkMcsGcgesi",
  "key23": "458sPD9K15VQjqqiNHC832CiCz9huJ1LtQCtrKQdU9ywyBi2iDhheAabeK3s59RrLxg7CEeuWF4PvwKbmw5DjMhB",
  "key24": "Lmni9j6bbTsKA9yWwVU8Un58yoNxh6f4QJBXPen2JuPn6Wz4PQRWZWePHSejsHbRhTVp8qSBeVsBGZ1dmJHyZos",
  "key25": "5hyhZkvauxhaom5F5Q9hBUQvqmneTQ9hwmaKce6f5kTHt6dyPaiMT7Yv5avM69rq3TRzhmSWinFkoPp4RffbKZrc",
  "key26": "44aiFuwZkALtiM7roMNixX2WyLUdF9n7bMGkN9YxsZyW3qPH2ZW6XoTG1PNWkR5zmDY8AuVBgr5k4F6749C5iU3V",
  "key27": "5URNvWaJcwCVK1uGz8JVPEoCYxNWUHtRCoxTxHRRhxNpCtCZXFshzPfHzJhTvoEQuGRaYmrr3CYnR41hKtuLf5zs"
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
