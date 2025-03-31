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
    "Z4N4YcQksSytuywANQdAvrFwSm4qTzbeJn6veZ8x5SqpkB82SJfuASZzavtKMeUpynoubc6DuTYbsUVNMr5Eq27"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QZg87xhmmCGxzg9WWyddciRyeibeFf9jDTKADMyCJis2kNrB3qMuRP1BMgBiiQKbmunzDKWZ2tqRpGhq7hXCkYQ",
  "key1": "3vxpTCBTtxSSdYbXWNwcWaSSdA7ESbH7VHxVeDdV7XSvwe5NLEouJYZ8JoqFYxr7E4V9TzECeudhZdy8kdrx6x3Z",
  "key2": "64WubCP6Z1STP9KVE2sohu5urfwFHa23SYyy3H23o8pMHL76r3veY8kdiCqyg167dMWJZ9HnsFncDuwWCL35VTBv",
  "key3": "4Ki6yGigXvAVFzdB1zAHNMK4KEsoyV4fZCMdRi7YEWuUbx7aAwjgDBLJbjN8buu62ivJyQnTX6bAYYwy13DkdgB",
  "key4": "2iXzEC4FDgH9TQWz3JtAtVsdguf987AqfwLySJoyAsVn51eWv7njbt5RUuwTgngoyeXbKhNnZn4XHRXK3bdDBrR1",
  "key5": "4BKHM94zJMCFufCAXAXGgALfuhs2VEU61oyeahbVGRzBZtax6URGkPdeSYvVMyouC3pxE62eW9QUiPCYxrbnPyCe",
  "key6": "ACv9tP9zbwETngvywZTBWZsUjGLudfzWs2e68QYcxJJFe7qjnHCUL6KF7QhpkoYUa4RiTyXUhRcFA1qpJDePyUo",
  "key7": "MmDrjdXRtL9M9LPjFwowUTCoGsA98c6XwN6V4gvVN7j796CSDSRAPmXGnHoVEAzKMdYe2CRqQrGYzyBNBekueeH",
  "key8": "4bNyVbkD1w7euHupVRx4VG7xui6xAxtkjqWTcAuLy15wot5URuXhnE5Pq6ZRRqAKjHbVbvdcUwnPMRY5g4n3fFZW",
  "key9": "4AfPLxhhaodohVyGVDU3T5FnWwZz9FzfZjkuzCy4RUWd9C8J4hvsj7mw55n1nfa528WXfW3z5JtEM8fTHDuQ6fSB",
  "key10": "2TsuroLfgjXDTsDb3kLq5ghKNEM5vhbWC4TPH3yaVZvRhwGDXQ6WLE5kGP3UmvfEAnySi95aVEEXGkhAWF4XXwuo",
  "key11": "35uPHkfMaESY2sCuaWXJ8UaRbaqGfYur4bSnjugzf9LqsckX6oSs7Ez1z1KPfYCDGsmgGyTRNCzbyJHipf1SF9XW",
  "key12": "d921ri47ME5SczkfSe4NRSqKJiniS6kpGTHx6RAUK82TjthRy9FtMwCvK1Tn3g8mL6dvTvsRzArdzPsUZKW51z7",
  "key13": "5mpStqEVg7v4sRxrf1mADyhs7PAjngN1d9dCQpi2VvoD2voMWx9VquUvoyiqRYmSAHPAVN959PcXCyFZETQNGiGu",
  "key14": "5fR2Gk7kaCgtj1A5rwUwZSjKeujmMcMxX4K1kGAb6ELi1N5EGczg1ULnExbLJkrBiJXWvekZfgAiL3jP2q9x18ah",
  "key15": "xqiZQtPEYzd4okQP52TtrLexkGrgq7jTdbxZda88uzbuSUbXxLVFgkKiMogmBth6y3ditDc2jP1uhw1WFSCgMtG",
  "key16": "642aNsFzGP7MYunDssGE8XeBvQVFS8iPC3WigbzT8Ld3jGR2Hdo3pbwWrRexHKZan3aRNNb3hBbVYZmYxC2qU4JF",
  "key17": "5HVSiPZB5bVNjewtUVtZf5qMgEQWJFu9saGEXgM7kBie82i1WwifUqQn4FDsg1GKVo99YiFZQ2DCMTFRCewiZ5jB",
  "key18": "3zRnJiL2axTkoL942nPWxU7t7sXtfvuEefKNGogJ7eDqNV441RByH73y6Rg87c4q5pfLRLA8didS46YbaExZEduh",
  "key19": "vRcX3Gj7HSW45YUmM4x6kXCYsJTytG8s5NDATq1TGJX8GtfJSmYcLBMayqKGchw5ZjM53QbwwW4PoXU4AgDYVWq",
  "key20": "3trphfvpc7pHkNYnU553L3qHdBpmWMuJc8yiABd3B7GovP2eFkFWTCeWk4W2arhm4qNeTuv6qAHLdFyWk6kU2ekp",
  "key21": "5zjbUjJCMNJ2nRbsNXgX14enxtgjdX9Zy2YS3KKer8o881nVFvDKuPkH7zb4fv5H3YyrbX4m8WiivdFiV3n3SbKx",
  "key22": "3xUZoWwGKyW5hQyWY6qmjsQAcvZkxfqHgT2YsBuTTdebei16Z4TsFUJiYc2KJuJtmgzVPNbUXUJF6QrirdC5ijXb",
  "key23": "wxrCCsyJjBS13ZMQdS2fmuvSV9dKuLuVup15MGptbpT8fbRfM97HmSB1J7JXLh2NKuqSwZFoVPXBpzGdfgPPdJn",
  "key24": "3R2ncfoC8YNP5P56J5DyjQ8y5wKopMbErN184qiDmAKeAetBsNWcTmPgWc4zsUxw5Lez1rDgxYMo1PHP9ysvB883",
  "key25": "4XkXVGnGceFw7pu2o7iBcb39DE6p1v7EPGrDMmUZbL1KTRTBaqiuP4jFoUwd2cNpGyyMS1FwB6Eru8fpXoaJ7NNs",
  "key26": "JzxRwdtFkWpzkym7HwhSWQ1onEqpnKA449vtjXqYeyy8xKnr6BcdBS75aSi6LdU1kRH3W2PMhK5fkQaPN9rsVyN",
  "key27": "54edS37FGYL8Xgps3oW9caZKnYYbekQVd6HA8fu2tt7wSPX2qjq8UfRzq54cehNEe8vuERV6gyfTSwkQh3FS5eiP",
  "key28": "2p9YvDSDUnHhVCWHK5TpvDLdpy5Ln2sKQrcrNmdNv2PSbKgyiNSeBEKuwXWVq83vmW88RGgCRhhRxfM9Whok98G4",
  "key29": "37ZbkWgD3QbBrT82dvPjDrBX4tokcpFS7JDn6zonQY1WmNHtkYvwBtFJks4N6CHVzPCb7W5QudBjY2KeqJJeH7Ea",
  "key30": "TLmTU2pdLL5kzSigDUjaE1zXMuYAPU4X7Fq7voGSv9rzjmHnfWesD37tYXH2yR8HBPHBjWQCQvV1rNvAsATcq9B",
  "key31": "58pAA1LN6dVYGZoBFZAFF1YgCmcTQdCfDNSnAybYQVCNwg94tHTrq3Lnzsfow3YQ6Ff32fbFVeaRVHXzjPdzhBer",
  "key32": "2YiU1Je4a9815JjgWpZ48rxstNK5g6iAEaYDvd2KCtSpFDgd32QUmPzraoezUkfMr9mhavXKVwevTNwXJWyrkBxE",
  "key33": "4fiGRjLMpwjfNju4Jokv2GLZVwrJ6h5JffAv1qWjuCyuqBamVyc8vtEETCJgYee5RLLUKAogPi3ZreJoyuv7X7T",
  "key34": "2NjckmhaoMnw6AnnNQ6NVJmRtbSpPoEk9CQpDqZjWNTK5S7kFEXWT2BTXnw8PZf8TYuRs25YadqvHGiQh6Ev1mHq",
  "key35": "4DZQWdSFn1PfYqkkQ7XnL3xNJ8pZanvZVpUpnDVbvGU5rPMpfvXaLuZkXDLhqTTFRf1aYc2Rs3jM2XGbucrq1J9T",
  "key36": "3oivuYx4cuKeeWkLNDyRwgJcf2ZpAwbvXfcXLct5zhpESyaQHQZ8Dph2veH3PpZHkUGb8HunbqZ4jepzgu65X9Yu"
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
