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
    "3Kj2ftLPf9CjBaCf6FQuHyFjB9uGdS9N8MceALbxexmHnUUoCLcdDVvGRcyb4Y4TMViZ9XDDEYvy7R7d8jD4uYNx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rXRXLtctqYEWdsZ6KZ7zD2R8GTCAyncYvFQrE8UfasgBxRhCwZmSaEDG1qV2cTHc3cmziEVBK2xEQmF4uYC8SEN",
  "key1": "3z6g8Y5q6WTANc6bkMuayNHLtzff78a9iefNkEnhz396YFdHWfnBPAWCv8ykq6x5bJz9ecxHR82MWm9GVfZA79mU",
  "key2": "2sWcBHiZH1NHNeEiqg4KPkXwhmR92LBxQpbAYDjTGDdiiKx36XpnKavJTEmR9TWQLrXf2x2DanfVpnWRRMCa5wGV",
  "key3": "4vPGJB3ezjsichMcRFrtR5y6muRJ8kkBeKK4sXEMEmTXzYGyWPZH1G7LsxdUeFNsHvN5QLADmsYgVRr6NQaPRXbC",
  "key4": "3WggVH5j3VoQHN6LR6oac113M8zwnYKzCD2AcAd1VkV2EyAo2NEgjvjqe1FUHweBDPT51RwxyfFvqZjPaiK4dkxi",
  "key5": "5wMpDb5EPV75Pb89vuyMKtp73RLTK8rkb3XiNa8rxmd8UK3Lmo4TRBzMobiNfx4udhz9VoT5wxvESW9PCiCAxo4k",
  "key6": "4AUsWnHyPFcWLFtjt1rHJF8U2AbyUsnLcVX4yVNcE7GB5nmn2Qh1vj7YmpBhaPvKrhRGKkrgi9ahT5kyrQ7ARAnf",
  "key7": "ca6D8hF8LUF5yJeYihQSp3sgxkYUgX12YshWqRGWfuP4uCfiVZ1moeLacg8yRkjGQgBTYrhyPbXgwVMUdyhUZj6",
  "key8": "jsnfjYCQjdXdbcBQhYGfXxYxfP4oiz5ZELUutcV3v8oSnrc4CZbnqo29GvGFjkMP5JggM5NZAJjRfkuCJ4KcE2x",
  "key9": "8cXLCwCYaYjQM7Ynsms6RK4PWBYsmvstbY2X7zR5sQf4guCWy6FV4SDWCrdb2YYk9yPZvgXaVVnmW2fK6S4JpaK",
  "key10": "4Rpg1s8SdyvVuNMNVZ4dNunj4MssvFtuopkD5y7cWHfBKAaCMdtPnDW6YcpjedFGFvqB1jA7UWzbvyftHaKAcwWF",
  "key11": "5PC1FRRARR7AcTq7p3dzG2fHLmuCsjZeFJ3p9K4qDNerE4bVjfRCsu9FcEscKaLtqESeuVaubejrLcyBBKBJ92SY",
  "key12": "2cwisGTEuK9svVK1W5wLuVq1NgH3gMoWjUMLNkXmFqPYAK7ZYd9ZngEXQv6zJFSJWSbb5Qc7pDUDDoucJhocAuKV",
  "key13": "3kNjUsLeGjDiJaBc3NAkumdFaQwsLyW4PdmwGsCg9DVhLWgWfwTKtQ9RQL676CJre3Ty72CwE85k7ybqbtzw5pu8",
  "key14": "3z6JayANByzUekx5xJAcaQoyG7mruvi7yWWe9SCHN6USuMsBEKHB6Ea1gcR63GrTRzhA6Zuiu9rQfyCjViC8xfpZ",
  "key15": "4donTunU7EVNxpsCp9xo3k5FnS9y4N5c6tkt9orZNTuUpRMTFqyE1YTqEU4aN5DN3rpafGXNLPXNSd3VHm9fvuyi",
  "key16": "RTVYeTs7q6nPjURQstvfWkMHRgspk4XGPQG6QBssL7tuUWaSGkcbPSCtW19MpjbcPgGokRkAn4D5kSgtMU2LgBh",
  "key17": "5oqzNZAMzLVFmpEdL4DN7f5z9KWBjqGqE8XKdn9vyN7Vo4TLS5F3MWujDxQQifucU9AfVy6xAA9fhxDksqir8Ef4",
  "key18": "3JXcqw5CwLvdMtHf3z1rgStktnRwnyH5JP4HSmRU67HPV3yydyqA4raZod5ocuyVRBz948oZBMR8XZP7hexavYVr",
  "key19": "vKxxoCP1TtxggDahP1NF9KuGMfSEwMU5ywHCL7HTZs69PLunqyXkCwHy7tmnCFxArxkzbqK8nVfWrsiGQ7TNnQq",
  "key20": "2tm4Y25o4DZxMm6L8G2sXHBNFxMZFtgVyFqrFJwQwo8PwDhW1Y9UydTFxSDYJbAjYXVBRpBxWjAtXjDBizArqFVc",
  "key21": "AzwmqeawSFdXGR8LmPw3esdC4Sok3VZdnNEc56C8ub4Dmiqy47tyge51k31ezhdVkXctR7w6sTrczJCXtyLeYV9",
  "key22": "4BH6tsPHK8wiYxvwpwAbruwHXVDC615YywwKrtohLufjoV3Ee2gyo8reG7NhD8uC8ChSMBaT2LV7Lib6QKa17eyk",
  "key23": "61xvPyTNmY18x3aZQN1fkL46EtWLfjuJ3C5JkJQjZVsmPaRAKyzZ7kiui8PgWFVNXhhziNenpVm2MourtZG4VGpP",
  "key24": "5qQjd2ni8vtx7pXKZGbMg2KKLfKgER8BqJyqgPqRkjJTdfjA2FdB7D4z9hp8rnFbD7QPj7qUqSVk8Uut9WUVHEuL",
  "key25": "3ERki65YNHiwatka6JPivfwLtp2zR9HyxpnW7VzWfmy5EhUmeYjDxKXcA2qqE3Jkf9c5ErMShaCY1p5W2PpJNLQZ",
  "key26": "4eoeJcTVNQUiZfjaURPXSFMVhWgFfo2Bbd7HPTxbhNjVJ9wCZg2kxTGdb3g9qK1k3twUkhP9XHyksSWmYZv8AZCx",
  "key27": "54g3qBLUmQTs6NQC5NJ8CDeDgkBpdn9Ma31zzvqnAbZy3sAyFNbxFgtP5TzwGRvGkyeoUuhsodxR1G7Q8jN2N7F5",
  "key28": "3UzFFv6XCgSZ8gFndeRCfm6dqtAE5bDXiGnLZfy9fCxVP8zNvk7DKRNWsjDHBxJRY7nmE8HYYobNe7nXZYRsvyaF",
  "key29": "2eeFXDNchzqqmwnDoDtayZkKu7u1J2x8nuVVCHjmoiw7NzweAYJstwYLmdfvhENmt899GnevUhtFvevvQ1tiGmRW",
  "key30": "oyDwFABPK4F51NwCCzQTC1VJ1HPm7Nd6zLMKPNi3GGBLNvBeLH73Ba9oszYp53rYwGSiyd36Ggb2axh6oGbFC5W",
  "key31": "5uW1Gaty6VAYLczXzK63aiJ7a5n9oiFSbkY842FEjQipoAsWe7Ybvjr9TUjiZWT2NckNtw8etkuLKR6kfomwZbP",
  "key32": "3ehmywnZrWy7yewRMT2UQ8jTPd2Xrc5iqoPr9osLmcCfqzZhH6677wVqSCVnpuwiLuufXMDU6mvQVhK1PcwiJnhf",
  "key33": "5jxipmF5chBZ92aEDkdNwAK4eZP9hUJgsznDq4GPFqgATfe9ojvMV8U8Cogd2bmf64XK5NroKwfyuCdFBj1m6wCL",
  "key34": "jMzHb5CsWBdZhyfnau9jR6ccD7E2AdvJDjFjrRTB3pSoJEZNuTGKrvVUvJCwv4pG5z3a33hbPbDpkr4uE9qXVMK",
  "key35": "4yfykFMZ8A4HZMy7NFXHznb3T1MVhkzL3eMHzLN1WsvM34N2d7mypqn7uhunNrpcyZtq6RKybkBkhNwn272Ep1Eh",
  "key36": "2p6AzjUHhux7hTPqzYPL5Qs2qaFgVPzSFKLn3cr1CJsvJqa2B5zRkSgJqVr961M2Hoq3yCQ7k8C1Lg4H75qoCdvy",
  "key37": "5ojuJRPbDduzDgHXuWncHavTT9dZ3Ddmuu37FALoDhjDSGEgbzKSLJNimSrpv8nLf3rK2XJ6yqkZhsCoJPHyHdkF",
  "key38": "4535HyXmz2uvMoFAFJYgPdt2ZHWtstrixgYFRqpoFaaUR8smfmJnh3UhhPPRcknYJo2mwqnsYjYGcrQRutP48BN2",
  "key39": "2hHuYP3JSVngEe4QAEEfQVgXBGy25Z8f7usnnqNCrPaQWEQYva72yAG4jZXbKJ2EyxoxSrfXJTFV71sbL6jGNmW5",
  "key40": "61XWs818ibACKLfocRz6sVMQrppN7VSMukA5BRZjSfvmwuMBKYBC54bjTz25b5CB2Ak7rJ9QsKD468urQ7x3J9M7",
  "key41": "4QRBwp6a11BjnSaMXvaGo1uENwL1ejtAoKVSyZGnJrZ1GU5wFS3frM6mjwqoboFQBzDhh6xaRTNvDxN7HqzeNH8k",
  "key42": "2YHbZQE6oSdaQT15s2vCS3LWvb4idoM55EWFn6rohTKmvJHkboceZoot3yVqUdoG9sNwJauToiUqinBTKphYsjRM"
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
