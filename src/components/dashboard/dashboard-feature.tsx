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
    "5DfVKscpiBSRGUtPJFUCLKB9wmLzT97RAi9P3qMWwj1TYVS2HSy8Gk1yFVafiuEztXvUyH1BLD1TzjByjFDkHMQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64x7Hm2YzzjN9K2kA649NBQrfxLJMsnci7YaSFtAtdDQGgWE4f8JV3u1S7q6aMsSuPhj8azAbsKWs7EcxhVPTepU",
  "key1": "27EiU43B86AMZERgtXAAJvdeShAgVcss7o5DYmXKrnnTzWEuUdd2kQe3thLV9sNvg2HYa2WnC3TKTWsAxnApZeX4",
  "key2": "2CUBW7kncj8NdFNGngjmme1FpqkciLnaX2dritRXGwHVHkUCUYRcUpmszULcygWGATze3Af8ndm6mDniZ5nBVXdA",
  "key3": "ubm31JWf1srcG4j48XfFmHfkyimo8XZkW73UzDmsdRU6SefRQCvnboz3zoNcYzwJNfMPk6KaSnwnxAmnVimc7g1",
  "key4": "7eRumzhAhmW4DnRRDSzdVNMw5nDkY6XUjreRGAaYngnK5f4h4M38vfnvqSyVZtFgSVHM4emapDBG5sD9C4YefQk",
  "key5": "56whVamX6J3gKQKfTDpyEiPf9YPvyAHc6ntdMf1cmdFQWRjkjPYFzPuoA2K5eGi6NKs7H3UMwGjsXFwTVQaDtyPB",
  "key6": "4ZG32rR7QrJ16Dwwrgo17QRvXaprb5LCZdJxpLuvygWQLowp6NH2bDVNg1H2hwhx7bf5uYsjLWgESzmXNbVkkxFh",
  "key7": "3yS8FdfkGaxY3hCBmpvPB6hqj3JgH2zfWugfSDLGUkaXGAyf94617VyiFWtyMShCZBkbLZqVfKLNmLRo7EeAzZHo",
  "key8": "3j22CLS7eaPbwJfmLp7do2tDRGHZnpBypMDQ9FP1sgLA9DsZcD78FH5DBo4QvP1WCBiLwUUXCKYrxuaxCFwPKeh",
  "key9": "MeV2ixwDZD37zN91Gz5VnTdhJ9gU1YrcUWusg1u1vedLGkuZfsQc2tVYRA6xh51TkUuaM7ANWZSznLL4tjidVBS",
  "key10": "oqRfr1JdKzC5bxDJdvBba3Czo6EsY4sS7hMEDZspk415kEKBy2c7CZ7pwST9jrvFa4gWv8P6dnXgbtHYngfCzp6",
  "key11": "4H8ts9A4Txnfo53armeGrMvcKtpYhXwiVwS4rAggkDhYoQC4Jj4n5E58mJbjJSCzz9qRXcMm59L7W2F7ti71pFzN",
  "key12": "33mfoh2tsxeXGjmn5XWGZGuikaZDrnBFvKAfiQATTw1UjvSed4V3KRCKySnDC8B9XKesiGn5xHfgyuh2ZjCq4NaL",
  "key13": "r5XCTZCr1P55cFj4mAGshWrNCaoXL1pnGo8WoTsjAooNt5jQgsoawKcCtfSb46Yc1cMhuqMoJDL3Stb3CPpZurG",
  "key14": "4C2ZX2ubcN7HbondFFSd2Le77skqrcrmBcAC8XPenKxdh9PK7h7A2o6bQBjAdyJqHKFiWkZ9W2DWK44GuExdB6Gg",
  "key15": "2mWAPxs7x4hUB3Jqdg4j1fQ7Fnc89jyHU5UELvF8E9efzKG97zzikmPCrcmUGafDaBurYUz5HDzVzYWWhAQxsqA8",
  "key16": "57SZQuRzaMELtBzys5ZtQEGa57fiHVjLUrVRuqrXhTfNoUaCMbTMQZ996d9xN7RgSX6p4mEd3ceLDbnpnMt9rXSW",
  "key17": "gimjApuS8c5wCAQCQcrAa8SqptyMm9hZxLpTgatX569SWD6kChYBCzebGm5eCWgd7iDUwFGyBrm2gihqpGSCtMt",
  "key18": "PWsxp2hm7Z1ueEPdMRY5PMmZBiAvaHVxs3F3HFJK2Rm3y2gCL5qDUM7onYS4xP4DsN2jSHN3ih5Jfqq7w9mSwbM",
  "key19": "y3q9prPSAKb9utu1scVrxHMhWMkXvzbwxpscAozPGwh2WVortkGbkpYhe5pqqxjLLXF7efSbTK9SvQwXxYZsgRS",
  "key20": "4LHES5289Y1VHjDYAP8scHS8xGMcLxPJqeMKocDzqgzY5yvphynFwMRKxzZPHS1osiikAtSKoMrfke6J9XEpBhVK",
  "key21": "3eVzNNtDxHuJf7XMXbF22bBiHUiFwPWN2tNvrQhi5pL4vo1mPjGpNSFMS66LJajqoptJ4a6yJJps8gHMYp2ict76",
  "key22": "jUAHA3VhMoPj9zTc3d3s43VgwoPd3Sha5jnMVkfY7131wNvD2z4PES4QrW74WUhwTm7NCUZPCqHx26qYhz2wVaZ",
  "key23": "3vbzLi93a9LgHSdswbqrwEUf3oGFvp5bLWZpMDQZurezx9cnRepQr6QgVKtiXigH3DCvonoWQiQqzkzXgXaYB6uC",
  "key24": "DT5sfjwDPCZALAyQK2YqAaDpzfMiNS3ftM4hBmAJREEysSsikUPaeCwSqttKCpfaAMiW2phvtrCk4hckgd8dqD1",
  "key25": "3EW9Bnm4ABFFhmzyWUyJcUYJVAupEfXUu9LgsArxWNe2xjkAa8SuFgbFQfQXZDDftXFQyWXcAh5fbKiTReExV3er"
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
