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
    "LvqBzuMg4jTgtpC4kNjXgiGzznZYBZkHFyNXHBufE2fVw3hXrQprcmRRcdueTFkwZS8iAiqymXiuxD5r7WPH2kJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T4UVkFTFtAGNkFsoKC3qbrv7A4FvMYVNDKpwSG9G47KJyExJTXWPFNjVje4DWg6dKMiuMm7L4qqhGhrRjkT8GxW",
  "key1": "4SaEAUzhm9AK3jWNnC9rYwMofAfF6pJx3zAnak4ue5ePuw8aoYdvs68mEVcuovCdwfdERo7EYeMRpp72yMztA7GF",
  "key2": "5YDUAsMnHGL3SiF8PeGiQF8GD6sY1C7ST5EAUavrxG22t59ARhLqYnvwcUs9bN8SJe1UrWPuYVBihrDeTjzc5hZ1",
  "key3": "3XQgBV837EHu2nvYhYndtsEhy46gzvTREfNd66a8Ere7tqRigia8HHYRjzqXwYx9FEnsGL9dDMUSYiskiJkRrCwE",
  "key4": "4MY9Vn2GENUUhvHdNaZ7QEJzTKCh3K3MYwwhD62VqycDi2nY9rFsSMEMUCMym6csBmAHoKkrqscEhu7hLqAzwCeD",
  "key5": "4p3RX8aKxpGRXe8eDtgekA8AMw8Bp6obEBNpep8po5GujCkBDQEzET8FeiAwZdVavt6N2uneoZZC9rycd8XoE83S",
  "key6": "58WfE484XeKsHhu1wqK74YgR7X9HNU4V4FwpLFvLK8XqmTY6TYNGStmfVu6iaAo2bAVkJcxKqbskTzCGFLcqMDt2",
  "key7": "3vuDyKu8ZGJcrTHRCBgUpdH7S8GfaPzLv9Awn9pUhdnHbqomAxGsBdxpaBJAuCe4zhstLyQTWBsw9EsPWzSBYUJN",
  "key8": "5ckxecmP94prkLwUQYusiSD6WpMJcuDEeDy4csjKU3szz3YbdCufsyEyfqqJ4RAwjthXLpvsPFhCnBEB8SBDPp8G",
  "key9": "28isG6bjCQJv43QP74Keh4frrDv32DKwTiugF2exAdqa2XgVroM2JH5sm4bQQEMCWCppJECjQ1V14dGK2Bh5mXBB",
  "key10": "4wGjFw5jrbYcVArbS9wmF89ASQMMiBXoAqvy5ohumN6LkJzSF4WEW3L7th6NxsWh1HeTG2yr327dJKGcE3sHg84Y",
  "key11": "2NEcKESJ63QwVerQxsNVEe9NHGqUVEtdtpMEmcnHpgdj1uZ4j2Hs8guGjzXW6e9WFoaY6g3Qq357LGir5ZcXC9Cr",
  "key12": "64EL5qQPAnx2MWMDx2V4eWtgN6sXFLrEcusHGbLrn6VRDzT3NCaVb62YN9Cj9gR4P9L2gjszRAPapfz4djEumhx4",
  "key13": "3XSgLTDHZ8chA9MNUbuHym1ykoPFBMypxdy1RMPECgvHh1xMZ9iZkPwFuijeK2ApwTbfaAoo7yRQFydSaszDF9Eg",
  "key14": "298Pq8h2Yj2neLHnjZrJ98EY1pG5gzpQJoR8aTsXm1WDzC33FshSMt4Wf7g4tpivB1HEujqRXvMEFgNViseY3jNz",
  "key15": "2JAPCFR9SCHf9knZ5CBy5BEZ5u3Y4Ur45Y5Mn9R1nVyLApqq2s7CE774s2FKiDKoVMq6bG3CSmANuKuEj2shioLY",
  "key16": "81k7mmHTP8b6CtFngmKeW5mgJxGsZmWTCZmNZjzBZrsAiH7gxcGPeXfEjZKfm2jrp64qrFZ4zQzsdTrrqsLLXnD",
  "key17": "3azcsfB9QQrTMcwUKo2Lo4itvJQvUnGtzBn2hwRpjS2pUuxnopknERXD9RMMXGCNokJiChAEpHSV13AgBwuNZKMq",
  "key18": "n5KC4djZGEfwt9m9dSfi43dQPxiJRsh7nKs5QgfgP6H4x73dufkjanJwtMvqvBdVpGPFvknTTZnG4nGSowULdBz",
  "key19": "3Ddjh1nBRtwS2B33XqV6rZSGxais7d3iLmMuG2ip2n3zLF8afWpSLRgZgaSAFGsxQLyuUjn9xQi5F484Lid5fasn",
  "key20": "3K6p23QBxbsF9yEM6KNHQNEzMGFzSjNAodTmBuDpWM4aoYrjqtvUK1qLvK19awieqgxQP8qjgcd2ZmfpDh23Hazg",
  "key21": "51adRZYhSVn7HMnmzV5YJAJmmarDzGSPrSRtEUPs9sExnjNeaknmt9w32gFQymeDkKmyxNGwm49urfdLvGxdcZbU",
  "key22": "5yTwT1ZvDEa4DMjg2pEj8jWzcsHRHVBFAxk3VfEE849UQ8eqdgtYHm4R4RMZH8NEzgZJCFujewMVD58s3146XBxm",
  "key23": "58juFQvaEkqGe3ekTCEU5KcgaQJ2eSqLjqJiBSfyjLqeJA1tDNsXGt8mu45SdXTB4i8Dm99B7qZzeSgHCHYgWcgA",
  "key24": "3Kbicb8dV2V2PDFAyViE6WRfewoopANqSNZBM58ssJi681YrKegULeeX3hse4VzpwaBaEfFMvfeLcpbTAznzTgFK",
  "key25": "4N3axQ8AQ3ENCSJs61XqxZgEQqxmY4LoHm9Bux3T5LEVm3HmWoYGe8ayoMR6STkPEEay1RzCV2cmzeghsz81fir4",
  "key26": "5GbqEASG9hQU5M613anL1owZzcv2nxtim5qHGXZNaaTAjEcbudDGf45EJ8TZ5ScwPn4ur2oWzWVND1KdgLjG5vQU",
  "key27": "5btFqBXBqx9fiyUCo6rMSM8onzERLrqqdA4f3VAL5GWmvujMdGc3mne77XASSLQ6mzRZBQpaeFZB73MwNEAVj6Mr",
  "key28": "43g937678J8iPqiqUHwTHD2V8Ti5XoEfcMbbc9GkGDatM4x9vT22i6oWLdfMbJM9oH2wu2C8wh6jYgUnZ1MUKFNR",
  "key29": "5fvzabdpG2rWtZ3sA1kcgvvNrhhUHLcYA8GBJZHqgiHB46g1BV3NGDRcPHLVoegQzShCfKMKFvyxgJLB5Yp37NbV",
  "key30": "9ZLerefdRGBLHpfTDRREuFDS9PTc5WuxfhcwLP5E2L6yVgKr5MEQWiAgE8HLJGEjCukWrHV2Go1jHGGvkMhJQnH",
  "key31": "2NKp97gk7JGkC389jxcxqFkmtNPHQ8iUztf8wk4xwog3vq2NMiaui3Xn4gYj1ctDFnxeWWPj52epGT6eQwcfMkAq",
  "key32": "585wtjzAaia2PGC6hs9yFxStwGHuxesPUL7jVmRGPXNknQtCv21nhH7LzzG7uQhTRsYmXrZMUncWXKWqhZL7LnQj",
  "key33": "2gsY4QFsuGuRFzNfngdtpsS44HgBJr9iAwW2TrvHQcZ7K1WtCWXc7XHidbfUWNKooKEgKfSitGBHb3UjbPuakZ5D",
  "key34": "28u9wSiV3pqMPVgyMEg1PErYVXa9mZjRNmV871YTruY2ZoEq9rJygkzRBhBKX9oLqDKFY1MswUbSntRuXVYxc1F6",
  "key35": "3y7kYGHxtaD79Txu9AasSN5JLZRk6M8ASMFAjoy2wJns7DzyeNXgRQVyqz1hcatJngsQcUU9mSBuxJ7MWQMztRw8",
  "key36": "431tN3faMcBSwTcrfQYTyZBdSHzoz6bDyzoGbYJ9d3TrA6KGYrJJcbarMyJgp6gZxGu8cLfaguzwgR3qcnwtanXe",
  "key37": "z3Ge6DZRGkaenJu3DHZPbA8ZR3fHktbnvUKN3eUSEBaX5eVThMRLCptEuwnwrchvvsNrBqNJTRpWK13Wkkb7CUv",
  "key38": "3GdYbSmRiKDVF4aMinGcxHWoajBE79YChiFWitbNejmXXZQNahzjn1x7zhR8X98TeUo5AoxRw7ZqL2mfJ2sCqRe5",
  "key39": "58xc6iGEy4vWfWZWDAcsj8Vz1kAbAyMrrob79FGaLzazLDGtZDZAG7KTy3AzUf9RSMr1qFpcuca6T8WLnStLpYFY",
  "key40": "4YzfRdtLFZX7ZeNKZHQfaTEbShR5bqMpZpAEi5tqYKaPMdkxRPaRkotmmFgEWT1Maq3gJVMbbfQEYL6jNeQWBTa1",
  "key41": "3KvS776HgmT3N5qP3eWSyaUfFBDhttcSLoGQQUrJ1jx8SDuEVUk9tVTvaHRJit9wxcxQG4hfoM3bXVsxbvrTgqYh",
  "key42": "3B51s8JNafLjt4Y8NJ6MNTwXTPH1husYzhYQY19XzKcwM6NsY4yNT3f7VVsVHyLLygV4neZmxnp51rUkaQswbRsk",
  "key43": "46fA2L6Ur1vhFp7bhkMmmxd6CQ25YB2PB6GoZRRtZu4zCRYKFGHEBLK1HKkznCkcKijk5wvseF3n3sF31iz9fLuj",
  "key44": "5ZwRjc8ymdsu3JMi1SNnTCkeTr7L48Rq9GfqJvRy6TdYSLmyFN4BXrSeEtStBvcNRk72GTuJQyy57VTgKT5n3qkB",
  "key45": "Mzh5C2wsMPbLREZE7RNu5j3HSCk6ebXUwCohdc1XGyuS18TZ1Y4VycGWz8esMr5m9pKkRNwcnV99zCmV5B5VGnm",
  "key46": "2YjGhr2vxRBWmiXYaQHpsjLaecCZyB62X71Kxoyy2GrAnSmpPvaPnWGoFy9857T9JYykeYhkuLx6BsVtDWV3usDo"
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
