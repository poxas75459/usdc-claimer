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
    "4dD6qYoSosiqGgomqpJ5od2BsMacFe8FtQST8HtMCfeFopoJSXWtiv2uAxxcC1W5JeRVT336J4mBPK5yhe2XaiPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47mkiLMifVzV3ghgzU263Kimu8LP3kpQoU8eJdbpMSiyVd49jotMBb4aph3kXbtjECfNxJ9ApJ1czQaTLu6JugYV",
  "key1": "3jz71QdPZH6TaEPPwe9f67UidZBAR6StpWWHFLzPMEUAs6EdhWqRkhWWvy7aatYvi3TREj8oe5zGj9yCAjqY98Qm",
  "key2": "5WeHS89ttyZAwd45A96pd5HaMJXqkKG7WHLHL1J9e7zoaAwQ3bcRZuM4MSW5KeFvTEtx7TLu8dwABj6rKhcj9xwP",
  "key3": "5BkWPNq2uXTNfeRGYxgmb9mSm34jNiLSWe4XCLFsPX4f9rjp4oYJUfEYrJ1NstPRZTbDzSeYKfdXP4XfTrjC9Zfa",
  "key4": "36AiNx9omcxyTJNThjvVLBPj3RS2QiS4Dgp3kkzmf8t4WTaxWw9uGn5vuMBefetmCsbKkPG6iNjGkgYvM7Z1AGB3",
  "key5": "F4KAzZsADWbAsX2EKUVfbcru9ZW9W5JcnyCHz5x953oecy3De3DkVFepo8ZggMzzp3A8YyNJWxdHznpGAggLZiz",
  "key6": "4QEpLDaReyNu9eqTnHFi61NjKUmH285oL4oYqGu6GZ4j6ZDkrtH7i2gBvN39DWSYHhgqCguVjPEo8JHjgMNRFTZm",
  "key7": "4ojARHCwDf4Danjr9Y1Qa3QbW3qG9f7SQd1SJWtMje5BRCFrHpY1fYSpuALk2AKuS8sFPw6Qn2qxtnQEnUqPY6YJ",
  "key8": "2VTcomAtRUqzUpww88QXAmhtXEGbmh1tgnVhApipRxJw5ER9bCfA6CEyrGujCaKM4BwP3r1RRac82fv2kRyAZvHx",
  "key9": "3Psag5h6bvHnZQEDL56u3RwD19XqmrHaANr8ERtzewU9C37iYMEbCTdToNFWE9Uj1dMhiqUKSfPDMWEJXN2oSkyw",
  "key10": "66ED99qDe5xC3AZqWYCZ5Y25Pi1nBB5iZ4RmX2o9pzGS1iLTGAEjvp7rRxMs7Ukfrq1NycAaRWjqNENfUE2oHiFd",
  "key11": "b5Ez71Suvjj3f9reX3uutSaWXcHBXv3yzjweXpkvxUnHNnUaBATkuPTHirJjTmpZs7kGcnvu6kUGjfeJ3SFhwwk",
  "key12": "48gKpDVx4aT4m3YBJcmPfrwCmUn7M45AoUXAWyjztPW3SWUMaH1TVdHawf8dL6uaHCYdTRYE7CpHsj1B7PfBkKLF",
  "key13": "25QsKc31UzBjLLid6tq9G9zneuTTmTGFqu7SPSS5sqqEtCdWo76zA1g3fTiftgfxNo22rR1CsDKHnnKQu7R3mPv9",
  "key14": "5RfidPi8mgyJgch7xXGUpjvJV7aUHSx8L17vocuYAANWMPFYGSU3kfGP6N3v23fDbZarJ14vBfcMGd6UYLbbQ5sz",
  "key15": "GcbHKvngnGgAj3f1yT5Mkq4a8y763ioEVVjjQN3F8QkgKLMXsVgoEHPSNpvKnZU8pGWoBd1ACLhcii2zCYphUo8",
  "key16": "66Hv5gkmH6ZyTMEQpK57i8BA94y7LvoYvgUjjqeMQUQcajLKEUXPmoWQyxHUb3xAx8aVyvz2KuFZKAbhx7mkfDEL",
  "key17": "24MrVExkgwfws2Ni9c6LLDa5PupGxd6s4o3865UMVH3in9coc6b1BfVMB7dHxcAUCUhLtkrMkt1rLAmhsACL3MkT",
  "key18": "4B3Ad7YAkyErbgPoLq8yE9GQfiXhBYq3dDHZBqkeYvghVa1R8vPvr43vcJufEvXodHfLQd7XzaUja7msuqQUvSTT",
  "key19": "2N7TqqJXbDZ2bjCgvkADmyhM2pLuQjfEEBEBNhJ4X5GNAaSTPGt5yFE3ZRbTYdnNw4YHYmspfB1RqYECNYKBt5Ns",
  "key20": "ZsgJK8Fhttmn4uEjWfELdF1SXnjQ9pieXuiMDRzceELGFWKnU3Y7jyL7uxfxRbn7NAGDfsxhpKitt29bGDuhZGc",
  "key21": "3vaT3hkehoVekouQ39xQSG8voMV2pZLQBQKyZgWAfYddAKL26tqC3pkrGUhvrveydA4C5J8xuim66skC5D3JZ914",
  "key22": "4g4tQvhEHWbZimieUKBBwxygT1puUEt4STFXYzogJRd7WX1212jPxLHWFfoyHT7dNJpeEwa6GrCN9YeGqhxy6fJi",
  "key23": "4fUFHkq9hee14jYkDgQVwHzevryCi4GHc6GsFHEuLoC1UtErh938diAeFNA5sEE5V7ieAaohtU6JhZoUVrDV34gm",
  "key24": "28y6tWXM2tVS12VBg7kefTSStSNzSURvLNz9ALTdqdGpN36eVc5FBFVFfZEf6cZND9vTiZcPZwuC6wL5mpUq9n4Y",
  "key25": "nJTmB8FQamsHo3oZsonoXNFBx34LXfKK1ZR3BMc9S5NUkTCGbc5UqUEqozLbrzqnPr6oSjjMEV42DJ4Y5nR5Kvb",
  "key26": "4VgvrfM7QK3EW2wquFv2cEknReQDoV7b4Wot4XA7TzFYw1RLRnvsMAuLVLNakFpYZtJGA7qi8wRyBYKYHPoSNBWu",
  "key27": "3qDbMoAYXRPPo33f5asrVZm2khxvBx39pm8fJVa1NwVwiqWFBC4xT3C6Xvzm4GDCzQ98yVAjyhx4A6hN6cgBVLy2",
  "key28": "2XvV9zD2wASwNkMh7UMMoHXSYSvHY51sEtMYDkdyAqq3A5RRtzRbADAzC37rnf6uREYGo8tofvSPExFN4BfSBhXy",
  "key29": "4qKbGBHKSTrwfPHmb9cEXc5sygrN3G8mvmYqCFaG94bEDCE2R47DJFi93JTQCQE7mCC9VwBKee1yDkKgKBbidjVn",
  "key30": "4rAjw1Cz35EyyG94csPL1iiegYb5cDsehRgZ6Hsy5moPN6qNCoUoVGF9213Nm2u6ESiGTqbL7vnm4BBV4Pyjo4pE",
  "key31": "TyuWCaE3cWqhPmYvnTj8kiAKUyKmv51xedL9RFNhucX6cxMR8KKNLbjk3ZsRg8hvCzYnnG4ew15MeyMjafWuuJG",
  "key32": "4aDGT7JgE1Ae5C2CPpbPzBeeRZWUHKbxirgXXDnj6kq3EGQYomQb4ja6yvkqdPHVcXL2W3L1q3WckXMPtu7MvzsD",
  "key33": "3PUQFYcEkUgXYKcxoS4BZ8AbcsA4m4w5SSyx8fitCY144zDBR8UniK7LW3GEYTc1dXjmVrp2LVwEUknfrjZhsQSS",
  "key34": "3zj58CTZDF97koudjsJThoHqzkHTkoy1JEACKG6PTvKCihFTHRk8LpkqqS5CWDTyJkzum3SXA5EJ923f3xHAauDm",
  "key35": "2yDMFBsrGLmwbKD5iKJvya6c9t8J7hBeCCZ17o77LncRpQn6v5HEW8tmi6gny8QDrvcNBZsk94DQxczYstJHpR2P",
  "key36": "44HeAAwr7YXhQdp2cDMyoFKQfAECUJyQeUTMQXi5L6bZoVYFyqxPo7HHqEhaWGCEFqioxpTeZro8aUE1iC6qyXac"
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
