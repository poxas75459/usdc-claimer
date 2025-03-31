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
    "5NFtvMty5qEMMyBfiCGcnnkuz1R6SV5LZzH4t9f2qbomoZoiu8r7HR8hfg5BPhuRRYaFmGFASvV32SiqCX48vCVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yMKCD3aDo1KZcBTD8vKVZoEphGDzBuMpkQmQJc7bAiu4ns2UDCSeVfEk86HuCdoEFcHbP2ogkz5R5xk7bjAmDka",
  "key1": "2wys5hLnJkeDEFpL2PuNVzDWHk3Qgnahv7cz9xavqDSceNRdewKVpDzEjMuj3NfHJqJQeaAJ54fXFRrrXcckxCuh",
  "key2": "2km9xLZ5GgojsGrggTwJPrL9zj2KF1qN2FbDKc1MVxjqvDMgwKMXaxc9BiojrecrAXcqLT29uPcRpRwTjPta5FDe",
  "key3": "2bDhWEyoRLQ4YcHgTXm8pxrLnicBmbTZhrqA4QE3MMBjopAWoH36HLSuEVwgRHTNHKECXdbjjTpdnwKZ6CZuXmSb",
  "key4": "TXBRQEifnYpevsARjHGNbFmtsp4SVadukzX8fzjRe6hMnX8puRc5CXGBuABMMqNWV75SSDZio6b2pkhgSa192rr",
  "key5": "23JFWpoWcQpfnDtR1GWLTqc4ZCZapiLocjSpfc6uLGRGE2niNsm3JHH1ZRNA5x9jdJXgpAHK7romTqLtj2KQmCis",
  "key6": "5rJWyWssx6yfwve5Fbw63MCQcYEbFSeEnDyU7nUJUmrzYcMLTBHL9LERKmQm36guoDSnLo6f3Km2d6F8t9TddZUf",
  "key7": "4MBrxj1TJ88YB9jY5LdpmVzb4zbZL5b2G7A4SJPc49VywXNUk5SFA4N2xtt1GTBPajXLhGW8nxT8uAu3foG4L1Bi",
  "key8": "4GgqcK1o14zjuNqFXiYC9muqoLp9MwPqTsH14nGhiNNqvAfb97t3eMawq51RwGhY3T6ADkF7hH25G7ZvSQjMoFQz",
  "key9": "5gkTFG1J5Hv5iGpsK4L1fyfBi39HCBwFNntBY3SQj2LVGo36qinvz2VHGUhA71ogfmcvfA6yqZhyztfaaUXUEVrz",
  "key10": "5f15MpWuUVWDAv7ofXcAvJoDKNKBdkiwqP8iiaeJvouwFydU9fDrTGpwTdqDuUaWs89GDXw4RVKipKHPBxBAz52v",
  "key11": "5JxpHeaof1JepzYHiZxXJ3LSVTccMuV4UVehpMMqV76BgotYfUyTGizRhcZGbsJ1nFbDi3noEb3eD9WA9VVAjMXB",
  "key12": "3ffYNYarK83bx7LxGPZdwpx8fuPJp8q6j2hN82xvbkvFtp6V1xs9o7y7wrqSFX6n6jaJVJaPQVTCgECrYaeqe2M6",
  "key13": "5B5sSmq5Ed2DWotucR88FQ6aHjtns78a3FYEkBWHGMDgvaikoJC1nfUyh6gCyqxGfFKTyLLm1oy3kaapDxsvFGcN",
  "key14": "44KXkehaEEU2751F1Q8HbRwW9vsvmSPruESc2hZG9ZqwbzrTw1spmnfZFjqRYwiE79Z7Xy7gkmRPKvUgakMjMAy2",
  "key15": "5ATrPtE5D3CyNAbLrGKbvh9V1ewnyfNLx48BL1PcQ344wBAciwMKYWRHatrRke3GwTUDMoPBYFemVxhijzwn3XKp",
  "key16": "5Ujytu4kLZZNPMxCbrk266KboKUApJFMypb9YEHtrrZHgipqieAsJWbpqhA51GRCv5AcAUQKobyyWybFPN7BWY72",
  "key17": "3jDhkvNsbF6ZXkdrXM1wV2WxKwHwKo1Ri9GMicTTTnNxavjkxJbZnmwTCS67VicDjuEYteZH94LXNqtNbdya3Yv9",
  "key18": "3YSw7NptVVp8B1QrrfZwpJsnuSRRHBdowXYdNSzjddrugFZUK9kZDLqYumsp6tMbxi6UPUAsjZU7sw1SbpLTibzk",
  "key19": "5sZT41gBGRBfyoZAqPhLv5YJAGRcc847WkdT1CxMworgkFHpVxi3QARuRACM7E2Vc34FqRJHXVWafKTSJCygSQHc",
  "key20": "4xkGDsDdvkGhescaaJeuyH3gsx8RnATwiugEJXWswUzePeZCPc13nBKcorzTGNyjKgi8joZtcuKXAo32357ASvAa",
  "key21": "RgrJfXqBUNaX3y3kqfx5xYDWuBrgnKCRQGqFzUSiwLg7swPmUkpnsz6L2pNsSTghZmLi7VUVcWUEcCaVSgZiaCJ",
  "key22": "3iZHuY1yzcdSFZVZHzTYXfx9Ch1Vwzq82c3U23CenqgNYU6uYMnyRYaVGKFBpERSd33LxNVby67wWkoZUi9eEMTY",
  "key23": "4xLRYgCmGE4buTggb4K6zrQyeb84i77pnv3ySYA4ZqEdL4Mrr2SMb58haNNqK7YV4mM4gAizg3tKmBLzRy5A6pQU",
  "key24": "56m635QCyG4muyakfPpSBLguUfumWfkvqvDhYDMALHWAp3P2zK6cE4oWm2TnMK7wZrsbtJmxHzGStmbpD9JZQmyP",
  "key25": "5gmJao8yjH7y2qnBhf3tsTeqkyGYKTYb8qJArpTDJbeMHqnfGPh52GHQdRFCn6CnPyVu27nkK52yGHU7PyPKLczM",
  "key26": "JCEgqzYrQhRxASPAKPhPxJjDVF1Jsj4oJNo2yxqHhthyko2XxuMU3oNSdBoMMrrAau1CjvmErJtPBtjd3DsjZnD",
  "key27": "57dDnMkN46yiX2YvpPUNSLT1BpPBzhSreALk3xqxoQqRvqzxecg5onZ9ea4qyN1q1JVnp8aGbrBZxPJ1y6STtmjz",
  "key28": "2jzWM3X2pMbHxLhoG3RxkHzj7tvrqUyrL96NSKEQKj3jhngir9tQ2tby9Vg3Bb1b63yy65xPCicWbWFWRPQYyM8M",
  "key29": "5orsLKrEGk7snZDgWTBXYQGMu9nude8vyUfR1n2WtMaLC5hRndRQDUwwYHNxzAShfbJEvJRvVxK6V6JwArurrqFL",
  "key30": "2zQ6ubyA78T63VG8bw147HpVtRFncACW6nCEcrfcRw6dPe7PmBjRSFnqD6wuMhGbwdVzaV7Roee3BXnm7X328g7T"
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
