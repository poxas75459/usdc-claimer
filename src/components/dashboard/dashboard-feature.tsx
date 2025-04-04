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
    "3CEQHF4ko34GNHd2yynD3XbcNQz6zhEkvbtp3XQL9ENcABcM8abPDeMroj9z9FBxtNTTAcQAmquXD7PzfDLhHgeQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48ZdwWPk6bta4iBMropFPgd6kzF6GhYgSzx3dAQwGgqpTKMrNXSFQW9HYvLP25wtwUyTKZ1DmS4vBFqFA3pJCxP7",
  "key1": "65xWziptmaaPiJ6MRWxPAWLPATCNSZx32Sq4ynC91TNw2RJVWnMyTtYgKnxdgtNuYXiY4nTAkSzxqkh8WX5nbXbz",
  "key2": "43QQQmqJQshgKrSwtn8hhtyZDV8wZnRK37a966SCrh41hRnLzRKuCqYkdZtcqC9eJCUdaooc8C19jmSBQeNCnWAy",
  "key3": "5yf1i4u1NccJrYKJYettSfRmjqsTxtjbeGUD87kQbAZppck8ftyaLKcTFeRrqt9abQ6GGm9rQuBXtC6FdyfYw4oB",
  "key4": "GNGzxKgE5JPpMUS2D53YmSwbpeTF4hX8aTGFSKkiTb1qCE7c67X6uqDBQhB9Wo4Y2doaZRq6ZnTy2vgLKZg7NJe",
  "key5": "65prEX6En27C1qK3nBmPbVeEEHHFdGyYvf2bFbe1BUcpNDQ5tAwBwvcu5GSaqJSVGBpWg8YY3dfWLHAzeM1JQC72",
  "key6": "CWrPxCCBaX7pqTWwEypZ7YgALdBJZmED6qP6ZgTWs2hhJeEvN2vGEEWG2QmnyLQbLnW1qrdiRzEkqcYg5AmYDWs",
  "key7": "25Cx9XQpsXHKktCuJsTZ8AWvfTcasKXYrpbfVz3ZxtJeTQCyhxvhfPgWZrLuNn7uM5RbcUo9TKzgRYmWhBJHCKES",
  "key8": "4TtW7KfLu8aUci56QoyyCM8czjg7SZrVWynDUawtzAcKKv6jaEkmGAPiAY3TUdJcKn2VLYW7ZW1rR8gZSnpSdTv",
  "key9": "UBK2tCJchbHHgAtCD99VMAocvT7Vv4KM7792JprKzLP5WRbmiGkJxndUJUn8KKtR5X9eN5tqzfhcte6qgCm9wKy",
  "key10": "3p6HjBb27ALUCXzwfe9nAxdfcGYHU4cNjXegSatecJsnH28oXNBo2C7F3Dg1J5Xh77VUXAQBCiQa5e7mL7d1feR2",
  "key11": "4rtPnZEqi8ALdoyrBhgzr6cxyuL6M2XuC4kYrJahv7yiAod58CfVYhLYp222RsYpZuYyeoacUboFs1i6kRmcuYWL",
  "key12": "2toBegYNUo1DsyxDkC9cHofDhp1z9zjGxK174ntxM6r6VFM12q9KbFj1PwZp2Su3EKej7BcNVeU711SfRiggMAsu",
  "key13": "3KXbssHkWv8Mzvk2a6xtM1AQrE4m29UmbznsRyW2fiP1FYqj2LsB553gi7xQ1MPBZaxJ4QtnEfrUoPSHbjJvDub6",
  "key14": "3ejBMT8RY8qVt2c5xUp6RdKDJhL6kHxbHRg2tHRdPaetbRrNfnYRSGzmxkdmEyxcvhTovSYpEDHEYsrYp5XsciW7",
  "key15": "VoMT1gR5SuZMDvjWMYr8WEruNCoNrawMroW97MLnmq7JDKjNdwsapeJtZdznDRUNdheY6t6T8ujv178dBWP6mLp",
  "key16": "5mA8ymMZQMrtKAnqQvhoq82p7jWRESdXje7nu976qQqwCG6QXef6GvqMWpQCBHwrWseQH4dz89daR9SWg3MxVCuY",
  "key17": "4hQCusZ3PaQCDkcp6zWrhVYruhhF6uVwfuYTSyMXXTZnBkRzoX4iWtiuU3zit4CTMPFc2Kzy8hr3RmHJXZxyMESq",
  "key18": "4vXDtSgD8P2e89fSbjkzmPe5oLNHKmaxtwrB8bTwKA1vP2jsU3gSqT5116Q6Fi4Jce75M2ViZwCN88uKZYDQyUtR",
  "key19": "4jQaN8WU8FjBHN6j849rarHqpLwFbSaQSf9LDSozGfNnkaYufDpv2v5cLtE68jkxrPPnjjEz2EhAcB4MJWQhVf5f",
  "key20": "2jo3DwU5fohTPYZ2b3dY6xXh5GdjzKJdLnw5zreiN3tSMXkaWELG87mu7M9osJFcN56giXLShoB3NJTBEGTCXYbp",
  "key21": "28H763CWFdWotE8RQcG9zMSZHPx96ZsooHSNamqH2kLZ9889sPAsx32uruSab4eu5JXavAC2WixZ2F5nfijd2Cfc",
  "key22": "5QKd1NKfmVui4VoB6UTTkeEqpSYmKgMM19aTFP29wQ85vBmnshz91rAxu1nTjqzTZjQtmwRhgfuw2Dew2naMtcDE",
  "key23": "8TQGidWLgzshouUz7gmnjZng1Ky665QUo7ruDZFPw8pP8Gnc7K7tQ5TXUWBJXwGCxhPDufKarfKgKaXsDx1b9Gc",
  "key24": "3x6LS85JfBbiStj8kcra5wZkVm9TLVyR39SPd4wvj14u245hVdxZzE34H72AyvKHcdK9j49ZDwouktUb9R7BFkuE",
  "key25": "bNxSxrSusvUP9ZmpLomeRMwbhBEjbLmq4wdqRvtPxksisRxn1pNGsbgSfVURTC7PhW1op94sYjocxbFZWHmQckv",
  "key26": "4gz7b84eKynuXJiBByDY1BbXDjS6L8AYqnx5S4RiToCmPe3HSAUiGBHmvXiVYWAPXdeM94JQov9fA92qPkJnxQKi",
  "key27": "ZCuTp4HXDqD1j5ytJ752Q4rjRgCMsZTXAbJqSVmDSygFd3Ht6V7afk9iajFduwH31uQWoSfHAURPbhnGp328cvC",
  "key28": "4NGjDign8jqcndCavRPw6LANqSw8t9kQdtmkM4RNG65KEF2s78jGNJzZffKgkekddQ9gBCDpfTfLBHXqhZsfqRZx",
  "key29": "47cWpS8ctkuEWdD6s47hP7Heqab9eqboG9sqtZ1Lp8L1zs8mgkuRYV1S4bgV7uZBq89SejenSaNDY533ZhPtxtAP",
  "key30": "5MSPiN2378qPdeB4wqebxuv3vGxSGgNpEBnbCioMo3bWi7FqBu2VsJbd9ymMMt4TV5wR3vR7vABgirYWHxmQcHBF",
  "key31": "5WrsoYt8XGR7yoZkZYYaYH8kCPQ3cQ5GmX1j2FogHPTeM8Seuyx1LLYH5jTTBWHf6y2eHnegJkBFNaxK6VZeySPD",
  "key32": "2pUjKQBgbvvYB9vAmih2PJHc528krWgNzpzY45WZ9pfekb32JyW5Vx85fS9gYaqLisZesiNfNvTw1SxkYgTdMmxb",
  "key33": "2FJUpTddt7Nmi7C4pEiFT9B6dKFP2WSgRm3rbn48qopjVTKtGWYqrgGQtJ3tSq1yDFo2s7pVrDwZDJXYkE6LpQLv",
  "key34": "5m6dDY5drHE5Y8iagP64Vwu28HAyLYFw3bXF8iEVA5nzkprBE4RKgjdn1rLi59ncseCZB8PTZAp6AbVA5uW74pjn",
  "key35": "4FhK1QGVoyzHf2rmkhmUxD8wYTbQpG3FVAaz7MM4H81omNc4E4VgHFCXetx5SaZEGXp4AHAbe9UC9eE5zMtoGw53",
  "key36": "4ESfKTH989eMGzvXdZL5sLvH1vKdYcvvnrUojZToqAjyCGgP8dFo8gk5XwpP1Gu5tidm82jsseYBNoppYDpPoTEM",
  "key37": "67njaumxw9NvydhzBYBLYDPNYBzhggszZNgXPsEEqkSoWe9hRtnozTnY7cYh4cMeQJvLYhViCdGBrdhGEgnUExuR",
  "key38": "5npyMUa2V1RWmt4Ms5mmpCFjucQmkFtSCpQKFvLoo8FZaJ9jdH4mLh7jCTXGQ4hkteD6EkxqPBNZN3C94Hygbn33"
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
