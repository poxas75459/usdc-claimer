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
    "3AW6noN3y4zV1Z1wa46JpwYkuqJDE6pc1KaPvkbXyywzoshrqyc4b29uiavBjhSZ4DHWULr1yZhQV3BgJHkRx32G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41MXK7kHQ29iwBZj4gQ52pUCjoPyRtY2mAr8yC8ERCyx1BUgj9SxVnoaGTD3PBK8QkEVpFSiLG623UmS6rFt5LUy",
  "key1": "5nE9nNh7y9BfFtGDtJ7VKGh6Jy8nKTrehkebDAXf9GZTFtAWLsuUGtqLNzy5x11PRf32HXAugJwNrR2vk7QRDUKN",
  "key2": "EuTPX6AVfSHhK22eB5XiVvkVXjKBumReoMqrxDrY5hdWjU2DjdGp5CLiobjTev567ufkzYVMXd5RtrCbPukbNYw",
  "key3": "3FwNaBstDphbyBgmWHn6QNoZutc7Pce2vZEx5Gi5oa57sTJcjpd9j5c7SKQShfJimonDjH5GXYrrvcXFf7iiHisu",
  "key4": "49mDKcRPnnxEpg94bApuQN2QdyijPAY65EJwMdoU27RwntCma4aKsKaSM7fW4oPexGT7e5aa8qASEBizGXNKGX8e",
  "key5": "5YYZyahymt16VvLYocGMCDjSzwpZkseHeUHfN2i9U1LBcZpXEkN8ErAWZg9u6yLgccxCC1nVAJHEVnCwRXsKHt5n",
  "key6": "2CAFHACizyrykDT7G7EweLu2tTWhEND1dUvWFWpHqwEMdPpGV4vkCPz1fSiCZ2PUqPbjgwdcoNJocWtKZo9iPeTF",
  "key7": "4cDW9X4r1mFebv9T3zKAbJhUfMFZJJ9Yz6ysh3ZaofEh9nad1XDEev54jGnCdDaN69ob9KZCvYmJiEtdaS8JoLeA",
  "key8": "2TjPHn2uRfF8YiPoyHn1GYXzoEWRFvy8Kgx9adfQnMkwuSWvRhtwDPkAeyVCyFnXrLUSToo6LDfB1i447BTxcD4J",
  "key9": "32xtih4NFtWLrRZnTbEBVvD3LFPy31amCA2yVzFtkR4QiiM8vNchCxYRXohEMurEmB1ujDLP38yUWWrgJ6JNAgkB",
  "key10": "48aHnoWJs2wSkTqiPsJ5QtZ26pi19rTARdBYJQGQ9tBqeTYG22RLvko8nLjezkR9wBdrTX2V3ZavycEzSmvrAUwe",
  "key11": "62SAZFAvSB4v5FpDHSpaXiqrrjD5K2fdLEahAT2nHhSqf31guAYZST7NiFJ4nmcPEwYKF9bHdnBUt7AJQoFx83Lm",
  "key12": "RfzmHGnrNs3ZnGH5LmV7iZDoifKRgVWBP9Mk8u8JRmHQ7cKHWHi1QzLzjCScnDmXvn2aWe9MtGB1s4FUka2rByj",
  "key13": "5t8bV9LQ9J5666ftMm3VnvR8zygBhqvgxyY5CkiDsUdJSRePnQ4D1tVftot4aVoXTBjAcPPTV4iKfBR9HHsPGbE1",
  "key14": "4LdYiuAagwh1zKYwG8RpgaTK8Wum7yU8hyCaAjVzYG8r6ZwvRA9E2sMkDPvCQodirmvCX2vwcxXT4wFD4pQHALWW",
  "key15": "3DvBJxuVmvzcWSHsVPxzJU1RVViSnSv5KLZWrYY2oNtea7qT1LHN2cZKkp8qowQ3fqEuXtUQqUEAdSpwFHRTjtaJ",
  "key16": "4Jw52vcz1rLPNDhwoa6G4jyaezf2uRXdGzAJ7sU69vR4Q47tT5Bsgh9WRt5eAq1ao7gWHBP7FowE7tWcqaLDeJd2",
  "key17": "3KLBEU4K2Nv7KckM4mrLFu9PzjMUx7CT3h7exxWKUdjijprvq9j5W6hZcyDrJKv4yYdJF2dYABTDUDCcXM9ut7ka",
  "key18": "4jsEoAwTT63VNhgFuu5aijMf5ddZWrDcnuNTabBnLj9htUsDoYQKLMKEErnt39W6qa5wjRaZSp7NeJZQbkzpk9ks",
  "key19": "25pvzJBu4bSFoCENtUhzGoBmYC4n8qRR9VMJohXSv12eMNJWwPqE68cNtR9i4EbndZho1W92XUSG88Ea3jAocvTb",
  "key20": "5WCh4XBzGUDTWgJkA9NCNjPwQf13U1T17fgQyDKcxGUWzgxepjjk8TKn98d7Ni5moQctZm83d64ETHQM3vHJ82pv",
  "key21": "2xaPRGNttKfwWjsJVYudyAQh5ySASp5TuWMr55RWUDCLnHUXyX171APsyfabrVaAF2C3NBDRp5wavb7Mi1fwMwna",
  "key22": "3yjtjjdJfb5QS91Q8DCXfp3MuLe65NA9Vw8mQy6CuzQ7izAkZqHF9v9u1GAWf7ckXzsZPuh5QUzSeAYwVuU4TWjT",
  "key23": "2L3BFNqmxjLadthzLtofPv9hwA1aQ2Vazu8SxMeg7zd4qwkHgta7PhMo5BNJWcZ5x5aeaQqi1uHCNtX21M69gLjE",
  "key24": "2uAkP1vSX1Qmzk643baZh8b6vghKYnHvVq8R9yBR52fAHvwdmELJmwZYDqqXF2fh2EschaVzDXBo2V7enxcgzSbF",
  "key25": "2hjfjsvqCUjUYGdSD6gu7iH5bzWqb2AP3yiayQ9HEwp4scji1pxQLy6mwkRJLZEThNTjv71L3z1HVBCcK9MogJVm",
  "key26": "445mjovGRnbf9xk43Nz9TWWebm8AoUxwggtAtwgB4vmXMZa3AoPgubvPGpNdeUoP4Abi4ao8hvDbPgLJ8Y1CdxE9",
  "key27": "4WUWFTtMBTrXFRDxMMqaMh2PzFXsXGWHwzj25cTpBAv9SaXGjVW3iDJXMX4rALpSrW2q1VmNxvMUyo2m12X2ozry",
  "key28": "Jvst93WJJ5qkhcZYGwwnioCXFsDi5Q7dUSuZFCB1kLBAxhxsXUX9oE37nMftyv9n866G9rrcjDuAXLvXeZXofbX",
  "key29": "4xVp8ntaL95py63r6G3p37BR5Sy8mE4gHLE3jrwpZVE2gfDHG3EYo16DsoD86Ha5fGzU5ougozYsbbZKr3yXUCZW",
  "key30": "ZGafZawuTGp8wNwxfkTFCBVt4xTY9BRkX5Ku9xBn2rK6kjswCeCuDsVjBs8zjD6FR7o2jRTYo9voc3k8k57549q",
  "key31": "5FoczmzSNbrh1gRhKdWSzQ2TAHeSH12ZzbyrHV7fSsMczt9uPzEgUXU6e9vQjgVKyZLpccw5r2WRNL6Z6pcjHUvY",
  "key32": "2WryZLGpCbNzrskqFtN9m1RCzSM945GLeiBqZSnBkik3r1V3PFNmvcJC2Ad5mqoNTEdej41Qm2AMTGxoPT56Rrvt",
  "key33": "3YXJXoQ9nctGZVAeTxCRwMFwLyUWfwh2wXFipZqjQQAkWreDVoQWcoDW9UVYA2PN96ueXo6Qf22n1BuYZANXTJDr",
  "key34": "4HyXoKaBWRsTbYWY9PFfSYiRGNvbw5RtBgvPZLqprBcY8EpGQ7hZvuwmxw2foreyf4LoT7oH9oKJqDnzR3cTMjCt",
  "key35": "3QrtccryWmNWDhr4MGtd1DeFbNWp2ZkHakurihES8tVyTqYtBZ9wmXVV42WikxfExPutz1P39UhbByBgDrxN592V",
  "key36": "5aAaX9sk55jFcfvvVfX3SzksTYjFextcQL3upDtWbDeRPyFNHqPCEHCCybUzEAcysCm4jsvGCZEkrhSrqw1zC1HV",
  "key37": "RDyMReFTaPcnL9sFS2N2CewRLL7VUJbc3Vr8Zu1e1ygrjLaPdZiS6NrcZqhEAbL3HYPGhouvwJPJ7RnE1oBWrnZ"
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
