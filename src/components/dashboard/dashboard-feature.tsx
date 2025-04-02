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
    "5NgffhQ5X4PdnYouxmH5imzw4FmVYPxPu6MaAkc3EvmpbnB6VTbgwYH6iV4qCMFfyKyg4Kfkpk1f1buZCgizZrm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UykmrSZDRfyoinrgYK6iAeceadC4ecgQizmZUZWGoEdt6SSrSMNDX4eLuTrMVL7piHVLWoGkoiqXo47FrCcJLog",
  "key1": "hg2Pf42bVaZWHtrmvoquneauF9fXMPu3kRiC3tPLrXzrFAFhkMDni9y4gZxp75cNmEdeXDLy3niqrRKNipMg9cU",
  "key2": "5ynMdDa5am2hGUZUbYHYWuTcpYCU3VVA9SZyJtP7sZSibqeJkqQYRj341cdWoymcRy7ozcWPPukzpDTUH8wiBLv8",
  "key3": "FZNSLAoFocuWuwneidmeFf5DQ1Ff87A7j23HivEy9Us6HN3ubKoYqvZ1Laa5qakuvgiZ9uUt4oNdRvEQufnUGx1",
  "key4": "2YjSAaMQx7CEAtUgT2qVacjahVTuLNydFXRpiFAVnDkYFCn8ba4LoNHCSHBzzhfQtp7t4Mgv8mpqgbtsCgM6Q6x5",
  "key5": "bA9bFxnpnKDn2x1xh2gP5xzSAZQx6HbyS8uJYZCnkgSdrbyPJbs3EvuK2yeV4rHLBzKxujhdt8xA6XKdEpKjNSe",
  "key6": "sYTCX9ZSBfsRsttjdM7ZezhTg1L7vpn2c24JvJ3nJ814kdhtEaZr6UJt1oqBJTNMNbz7MeuXJA6ajAEsXyYo6Zj",
  "key7": "VX8KMfQgYbma69ZRzhMWZDqs4yjvULv2p4UQTMQ4kT3m3o6LVkpQeWMWUHNrgy1eGpRvDkQPhcCEGJnY46BWDCG",
  "key8": "n4NVNPz31bMV71mmNmDJFcHueFtmYNuCREU4JGdV1xd2qFtSs9Kqdw95XEphrofFzm2kcj7ERmj5S6Hzhm8Nsk8",
  "key9": "vnq8mHs74Gq3rCSsM53Kcseh6cVuR1PwGKiLhrqCdvCMW5YwPW8RsMPV33M9bcoxyEGQEmYY9k3Vqp5NyY499wy",
  "key10": "4hEDFWvgyYwTiQuiyWdoi98MHjpnzNyfHG2TJpEMLHUSNb2wWFh5ezpkwJiCpLYkLcajrmKBTbJWdsxhSV9usmdv",
  "key11": "4xZCKBpBVqruuVJCQtJHLawgfcANgpYRYVeDNKETxhDZ8y7xAweMVj4yAEqesGxdWyJs4KGMzqcQJxKFoo3XxjEY",
  "key12": "c3bkyuAwLvBRaRhDzZj69VcXJyP8iT18RKqbvNrbfLkjYpaSmGNXFoAFyj2hkmMCWAo3aFS264v5gNeyEZ5rgRB",
  "key13": "5mp8AjhaaypyiwZv4mfNyiqnNy3NBNcFxqsKrywKWUtd5T1hiRpSfKaJSgKppKL461ydWwTDRuU931nKQML7i7Tx",
  "key14": "cSSUdFejB4zGsgGZnMUtDathF7fMvwyzon2GEKyqTDbUBA69a7WsGFvjBCXbYBvZ77SKduQ9ac3bb7qsKSeDaYa",
  "key15": "LWxousGKHH6Bbw6p8aREqgFfcaEa8WZLgKAv4JdoC64r8upotTRvRc8em2e2aFZbE3Ki1EX4ii5BT9tBwdnmK6Z",
  "key16": "osHqwFzTzgnspYUZoWDWMxbrFUfuAAMH2ZgwKy7UwNfYhTwppmEQv3fMe4Mf7L9VXvmZffB7TyfkLV1bPm24aDP",
  "key17": "4mgiaQrUhqVCo6zomLkYWMtMS4YRmhewX1C4qQb3pb2Y25efHspyaZNzD9AeJLwpn3YYbhytmafs7Xa4X2BrjNJc",
  "key18": "gmtHrFN7FKMJzV63ebqTPbHDfc67kWuvkQHLeY55hpKs4M22pyzmNGVgrcqdrg4okqWx7EeuuV4GNAPNpCXbKta",
  "key19": "2MpkiWWcJtj6kFfoc3QBmitDxyPPrcAhVGDivQKvnD2c8Cfmsuz3cS3ykJ423kjY6a4iBeLha9SH21fqVPYnWiPB",
  "key20": "46LouA6VPzkNZ7NrXchFEHGTDCrVqUfQ8z3uDY6yq9EQgnQMrYGKFSgdLyUHDaFDk857LDbFoW45E4RMveMiM73c",
  "key21": "3sMQeefvhAY3reXT9e1SdrLZZbY7qacybchW4BgLsDo8SCVFhzY3JJVqopGYuuBEWBBNj2w2ueQ2HqVN7xAvEBj3",
  "key22": "A8euuZfHDhej18wRc117dghMieSmQvmULeMWSQ8NaWgrDabHBkEhy93KvPX5ahsrhQqP3yvLwRA7vWwrw2vhZ8C",
  "key23": "5dUPw7JnbFMbvdiiZpXWHPbDnhr4vPe1SCA1seZdBEUo1NBt4y38rY92o6zyJWX6Q1afmvtZS3AaWvc3G2LkZspH",
  "key24": "2UHxdRhTe1as2iAYmtBrx9YZQN368bJFwx1HZcWZAnHHg7GeKWLHemQtsMZgAKC6SkQQhF58vqu1TYDGttA17fsZ",
  "key25": "4Q6tWYrokohAYvSdP9xWTC7SKeRs4amGygaBZmeMWysikiUhe7AYsKH4AfaMTpATYwxnwSdWEdPwz7aFgQ6aB8ZN"
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
