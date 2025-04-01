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
    "3tjyhKa5zsDcKRAt4xJQVuXyZ9kN6GdJ82y86bk5nMLiG7ZLECz8RfAY4MvxSwXnjJQx21m4oyLodaX8KjZaowH9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2djBfjqqycgUfPDQtZRq5fXmUBM2ZShYpqKw8ns9rAqaWTKnhGE1LKBFtD7F1AEWaSwz2hZ3RHZLyJeGxZKJZB5E",
  "key1": "3ZWWtGMPDYTM7t8sCr3P3bKXD7z6ALkauNbtDDQfdXAnHHZYjminNdmM49RmNkCCgLbWav3KD5ZTR23Hkcf2d8BA",
  "key2": "4XMf8Fs3M2VentnZL9q8JR8hqfmKQw4khjfbHe1qeCCoyacAjEi2GNY7W6zSsx33EJQycGn5x1eRSdiL2dxoHWZE",
  "key3": "uCWHqg28o8KJQsEtYju7HE328ha3ygzpqzAKe2YwQywRfR9uBaydpE6PGVnpALQTcSCpVQnVUbmYvbSiytqttBa",
  "key4": "5CxWQLkPBsevoJV5pjpq29okg9fV6H2KTkkw6bfuTibhq4co5WNFZBbRR62wURrcK3zDxdhGPS2fWZ8pyygArkkQ",
  "key5": "577sw9pWPaRynGz4kVDAYFVZhq4NBYSKseYZ77eKqHRcs3JkfwRW9hq5MHpT6vm3XgGqvaSz7QeZ76YkaGViqHkL",
  "key6": "4i4MsY3APKMJXUKhUwpWUQEMssjNQV6FnaGtRKzrAoc3GXxWPbUHbQtyyvvNan1Rn2yrK2WmLJwYNbdLyZ8jkMyG",
  "key7": "BGdK3pUaHVc75MHXeMMKN2ToXMh4pi7WtuViyURmN1uUxjt7HhiYNPF3NaCVD6LWhXtM34zwJ2nKmKHvBmuq91T",
  "key8": "8H2UM41P1uH4zgTqnPczh7fuUoK8mjergyDsyn2dyqEaH5EwrR87YSTxgpJYCSAkQgXty36mgTJA4sd3bTX57C6",
  "key9": "MZvEkn8dTciNqeK6jVYL8eRC9kHh8CUWyXcJUzgz6PYLoWjfUrVww38dVcXhsakNzMSP6Rz6wnfRp3BAW6F9dVH",
  "key10": "TFZ2coDgeD7Sg9XTuWHcx7a29swhxmqJjtu9bEG9ojb7ggMoDHmz96L4qPvNJvsHt55WmyG6TPx3xssHJj1WYKB",
  "key11": "QgSJ9M9BHms63nfCQZEcKHAbzjbBwe3woifRojpWUqtBskyFARf9N61LWP9yQHefr5NGiF1SSAFbetz2ZC4Efjn",
  "key12": "WgybUdYWZwKW1TGb6WPE352xtkCmW8G5udKn2Ak2DVwqi9FnEPFjTNH5yDb4F2n4bdvRZNEuSjpMXq4esiT2HWN",
  "key13": "5c6XjP1GskSsZsiMUgiFih9g4DqgkgdW1C2CqPSWQKRu59ZSJGpBRSmQXL3yj4ixd2LSD4atBz5MUGqw2R8DFM2d",
  "key14": "4WDEHZ9KNUU4LiXfQvmvZNxPY345SRx7dAgF3xG7mpRJM1gSJqiKvLrB5XXYNxhKqCVeEiTmJLAuWds9WDBzonBV",
  "key15": "5umrZbEaiK9tzcHt9aBKdVkQWkcaNs7xNECfVyTc2GmVtYgyztR9yFJiTn8STMykq6gbiB8AJM517nFoiRkdsDb2",
  "key16": "4NoHGUG4fc49unjDNpz32RAiq65XBuxTbvuTQgnp9JREXF7qpTadG7ZGmFob2uKLXsvD1UNrSmAYaNnzW9FZQBnj",
  "key17": "447YLmqRuujYjBrsLR3P9wyNS9Tkqwv2nHTp7jLWXURV42Nsyeh6NC73xaog6tHcW9WCXnSpJMcyLkHddtuBsbVZ",
  "key18": "2LZNNfCnSHyFdpxCijp1JMYqYUSXV4uj8K3cQ2mrNWTWmsBuBZNXbsV1baVqUU5tXFLFUDMWkSQ2m9tVAngYacf3",
  "key19": "31v4BFp525vrwPKpntx9Q9CXNdY3EGZAMi1i8kdUUTE8hVXwjiUYSfc1eiGm7hVhqBXdCZ9cTJB6NHSQUX6HJ8ja",
  "key20": "CppNDFoAHYGWZZKHCqso4ECR88GVFgKBnGeY7PjYkfUviL6BxGNW7tYfABaCE3NFx42TuuPZCAah5w9twa3ZC7v",
  "key21": "5U9DxhkN9EZgfcdu8GCbd6tavNfeAQcmc6jRuTT6ZN5KUbNEnvTMyuXaMaKKjrtgyz96HngFN9aeir5jU8aronqg",
  "key22": "2Q7AM49XiNZRsdP6cs98AaJqxQs6RhwFkNZAXLLor2h4xLeBR26xYfPeigF1aYj66v635BNbQnvwHjFHPdUQ4P3u",
  "key23": "3tgdBRWvRhyGV9ZALX8BYninC4uSqZjTvhCtLC8ttmSUxNRiAFjKdhAfZ9KxPYttBTqHbcNm4sfrzwhyJEd8QiqK",
  "key24": "2RXccRuA8y7V6Tkk55tm3vtnK3aTWrV9yrK8Z7Ffh5vyUHzvu6j54CKm43HWhZpL4s2AddeoWxj3hRjS3cZL7N49",
  "key25": "2RbRbeyKtx4HXQ1nstFgpxTVhrmCBD8avpj6iQzQGoUKZ5kQxS6qMHFuNsvaUPujfFWNEKKwxM6GtcaXRcdhb2By",
  "key26": "2YieHc49TLZPq1FzAyA25qmveNffD1qa7ELm6w2kGtspxDJ1SGQi1T6svnWHBGaSeRXGpmQLvk4TZF4NA5eBA7GF",
  "key27": "3DMDjNXSgyZ6K1JdCK76AVszfmzCp3261RAJuQpzE2mJrFJmAB2wzNvSQ8ax4GD45d2iVkaNWkgNU49SuAXbQAWj",
  "key28": "5osDwH4QG18F71xbAaJDa5fJ1ZYGLPPwv7W2zPcGVP8HsFThXi3zbMoaHLwhJfkwTihHSbn8Y6FwnSagZuaZzVQg",
  "key29": "2bXMSpE5LoQmZ7gif5A6bBjEimowdVQgBPP9rExyWY7is4WLzbFjcCNrkRANNfRE5fvz24peqxy6VCy8R6i8GVnL",
  "key30": "33ZqR8dsUVnnYaLgm71ebXsm1JaRuP6hgNT5bkP3cke1HRPiJBzuZKbBCkKk2yUhCbDSqwkmfjoGzY4xxi5FcQAT",
  "key31": "2u9k82Po95ihK6wPExdE39nxEQCzSV8p8KPsK6wsWKAYYRRKY2t63A1FiVvPTLkwN61VfpNhkorue9qfk8Z8he18",
  "key32": "4ExddwTZZS1dZ7v55HRkNoieg5C4REAAaKiTy2QVE8HCFmkANLjhQ4HJe6BLytuX3A25S4DdKa1AEQv2y6RvpyGP",
  "key33": "Fv4xVVTpunN6n3kYcwXxVW8UkLu6gGdQ8iy1VsUaYo58A71aX6gXaHT6Kfsvt2t2fACGEbFHYpi7v5JAoFDZZn5",
  "key34": "3dDMTMjhQNFJsiyctCkSKK1AbyFLc5gq2WLG1ZsvVHVtcg9auEonRZEDsEGoqJgfRAgUNhKvThfoMUAgU3UoPy1X",
  "key35": "3hgbmyjUL4UKcXgVXzeJJPuygVTgksq2FjDkTaJu9rfCBtXVXVEdiQT4Tm49TSjnwENHC4PkQrTu7Ap4baWwsypy",
  "key36": "2tbTnz1vqZ1z8ZDtHonFaXzBUG6EFa9AXvjg6bvACRXePgV5aiQRrahHcnGHvcTYiTa19V95PxnF3SjagpGpXQgq",
  "key37": "5yD39w3iQqedqzYGW9UuvwJqUoCnLgyGap6q62kefgThMjYYWtNTdwY36WcaUZFWpuFc85QhL3DDyFLyFiKih3wJ",
  "key38": "kKBgJmGgjAFsECAsMmYkYHbEeCEN5YbYyptPPjtgdbHnuWbVzKczH47DoCTHYyJWM67r94XubGy4MKD9VmNBUQ7",
  "key39": "5keLkXBZVnNhKTuc1HTVaW2bBv5ruAKUA5KcpQiKjpoagPDCChqR1Ea7V3E7BR1tR7ZhT1tsBUaakwnTyL2eMWQx",
  "key40": "9sdmBFE96nNWFTDRCBVq1rWgHVUSNhWo8YYJn9Hqjm8o8RWMJdpnVLPbp7oUknVei3NLF5qjZJ9uhgnD3NsRUCn",
  "key41": "3eXzzfZMNfQxe8ToPQKFTrPGHhdrrC9Gx8Gs9oZyLgqs1GERkSNkfxF48kmJMh7psCJT52PAoPbAyPWN8xN3FUSA",
  "key42": "27GXRPanhvWtyw7FqdN1A9sHwyrUAztoeq2fieXMdcH39NSTbjkH35mdbGs4dk4PUaPFfiJ9c7nm2widqqqDqSDi"
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
