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
    "2xq7LnFWEFRYWkJ9eNi3zUXU7zZdzgjY5aZEP2HyydpharBBS4TVy51rrDw5hTT2Mea2upYPWSNBpkzeQEGiLGMG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j9RGR5bdSeFwYUDHCRuGJ5HgTWHfLpUrrcgSy1aAGdZqQuJChBANvoFEAQpApb6eTKRBYhKSvbcB3GnsnLr1L9b",
  "key1": "2kZQZWEHW1hg2qbwvz2BnLBwSafTUMyFsQjntCv8XJZjsDvmNFZCPJXDJUnHp5g4hjxqG73sAFyHwxw6uik4HbR",
  "key2": "4KJZXPnGwkzM4PvtaTwX2vzYzQGBe54NZ291386Xv3K8BZicELe6XHoJoNdmsnWHNC2wQNronfSgJijJXXm6U56C",
  "key3": "5n8rSeaGiT6LaqE8ynKzsZMUoySyBgiagcjLGnbmESBj5FapDrM4Jqg1eKuqtHFLdqFiL1HmCTeNsU3GGtykEw95",
  "key4": "2aWfUBm854Pb5wmH8qQz9KjexMEL2VkbP3eicCKFHUJNgYfpRp9JvnSJFzmbYVzCx2txnfkVqMa4QwmCAtNQ1TRN",
  "key5": "3qHACaH7V37idLaCe4HtnMM4adRaX8mZWswbeyHsD9hMNbZceVLqK9SbfHgkqHkUaL6YgiuW4RJPb97Vaa1SaPx9",
  "key6": "UG7QQY5M6oP7dQgJybNYjK1ppu7GiXgc1kppbX8WcHLVqkwT7XUaWx4C9TQekdgT5MdxgUf4qUZ1Ttgxpszt9mE",
  "key7": "52W9ZFxTGy1XwR5FnxtU1PTNpKvzX38mH2vvWjWQtm1MUBEtPc7ZTK78x132k9zXuTsrxHfx5CzrdGDTMVNJzHBk",
  "key8": "Ymm2YmhBGNat2FzEpnuVf84dKEsXBd3nPoX1G8HjqmmAVptToooHRrSaNvbXrSbCkKioFCcq9p8CD37worRV4gh",
  "key9": "6DW8RuxraFb1dPPwGFiJkwjdiW42tmrcxDfoH9G1Fdrx3DfrqetjwDUHNGwFupVc1yMPvcBV2T2LRutYeGMwDpf",
  "key10": "47BwvJ5XgQdiazqQz5sUBw3BGaKtzUmZtJfDij4D2j9EavQF4cwWcC8kJWuxHUYNFchtAqg8pbqghqQLfHyiXvsT",
  "key11": "2ityhrpAWnVCkNYBZrz8zMXHWLv2mhBJYtVPNLi8tPT9BQTexMnrfeAxuREQz8WP9C83ZmvSSQucDcUWj7jePSnx",
  "key12": "3bFYh1EXvwu28hVa5Mbq71BZEmjZk56w5oLPQezHhnCaWVzjJRZi25oPSikMnCXhe1Cf5BWht78FzPPgxJkEBhh6",
  "key13": "Jb7xVXF6joQAkBh9YbLCj8GKpkjYyYX7B4kxqjpJSyNjx5N1zxEbjgXqeaDHEd7XwCByKmYSQxPXbYsaPCUKvof",
  "key14": "2Aa5M4VuWCcXpfbd9yW9Jq4wiB5nkitwFgfANrEU1nKfY8Tg8k8iYH3CXRPT61TuvE8vAZSzJLMM9QGsUDYWRFLy",
  "key15": "6GKa1TAjosVhxbENJePxD8oqAMmSLazkNe7H1U4DFr66TZDuoKu6Evh3mLR23gMQCHt5CTViU1mt8z2xpvos7QF",
  "key16": "2BT5ErDphBXXNFkr5iS37LJkRAcK9zMF5U3kwSvo7TPcFNrqtyYasCgEV9MT7PN9vBasmbutHcddadurmY6s6P93",
  "key17": "4m45oty8F58HMRCXXx3KaQuZBJTdQKspbMqDykpWVFUtV2J9av8nVmCxxmCvTvdpqUSBqn31iPgvoRn8h6PHdHj5",
  "key18": "Vv2gKX8oXuQFhCQbtBEFuvvPyRbtzbPu7sZff1mrAecj8dWng5KPcX4uC5tnQnH6Vfk1ZfN9H9S1F5zRKKQ2yX4",
  "key19": "5ocsZBAruqurmYvUrmofeqP2QRLWS2PExmmtP9s4zEGo32UbiovoNBtf8GkqN9Up2A3BkRdSUnAMZVNz3dWmw6JE",
  "key20": "25snBjD7Z7SGzGoBeviQ5BHNrspogsFyFfC8XF5c32FFCg5ma8t4huqhh2MzsQHdfyZdZvE6rAdSoPRfgGmEw99N",
  "key21": "2pGtwPsRajhg8ndLUnRBieAFrcbpAMk8cHLhVS2SVngkMQ5k3HZmoijYvjTsd2Pnu577pTVN6xWNsp2i1AeJ1Uey",
  "key22": "wHe2E7AWn8AGyYr6R1FdwRv81oTT6Qr4KLJVZwqtAaCUdZMWFJqwYoa7tvNtBv16e44eppUTLcHWZ63gwAK3kJ6",
  "key23": "587UBcqmvaVLANyNk71x9G43WFdrmSH8U6x1MqBsb7vWc5woJ6iJhMTNFhb1Lns5wryt8NpD3rHTPTiPmNfwfe2r",
  "key24": "2QA6StGJzovbAz9q7fuHKWqVdWVBEFX3mSzJ6FwLzQ9Tjxs2p6YiNJYGvy7rqWmVyBL2Cp5RJQUZ3dNc36tudTb4"
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
